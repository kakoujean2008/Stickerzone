const express = require('express');
const multer  = require('multer');
const path    = require('path');
const fs      = require('fs');

const app  = express();
const PORT = process.env.PORT || 3000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

// Dossiers
const UPLOADS_DIR = path.join(__dirname, 'public', 'samples');
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

// Multer — stockage des échantillons
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename:    (req, file, cb) => {
    const ext  = path.extname(file.originalname);
    const name = Date.now() + '-' + Math.round(Math.random() * 1e6) + ext;
    cb(null, name);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
  fileFilter: (req, file, cb) => {
    const allowed = ['.jpg', '.jpeg', '.png', '.webp'];
    cb(null, allowed.includes(path.extname(file.originalname).toLowerCase()));
  }
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── API : liste des échantillons ────────────────────────────────
app.get('/api/samples', (req, res) => {
  const files = fs.readdirSync(UPLOADS_DIR)
    .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .map(f => {
      const meta = readMeta(f);
      return { filename: f, url: `/samples/${f}`, ...meta };
    });
  res.json(files);
});

// ── API : upload échantillon (admin) ───────────────────────────
app.post('/api/admin/upload', upload.single('image'), (req, res) => {
  if (req.headers['x-admin-password'] !== ADMIN_PASSWORD)
    return res.status(401).json({ error: 'Mot de passe incorrect' });
  if (!req.file)
    return res.status(400).json({ error: 'Aucun fichier reçu' });

  const meta = {
    label:       req.body.label       || 'Sans titre',
    description: req.body.description || '',
    tags:        req.body.tags        || '',
    uploadedAt:  new Date().toISOString()
  };
  saveMeta(req.file.filename, meta);
  res.json({ success: true, filename: req.file.filename, url: `/samples/${req.file.filename}`, ...meta });
});

// ── API : supprimer échantillon (admin) ────────────────────────
app.delete('/api/admin/samples/:filename', (req, res) => {
  if (req.headers['x-admin-password'] !== ADMIN_PASSWORD)
    return res.status(401).json({ error: 'Mot de passe incorrect' });
  const file = path.join(UPLOADS_DIR, req.params.filename);
  const metaFile = file + '.meta.json';
  if (fs.existsSync(file))     fs.unlinkSync(file);
  if (fs.existsSync(metaFile)) fs.unlinkSync(metaFile);
  res.json({ success: true });
});

// ── API : vérif mot de passe admin ─────────────────────────────
app.post('/api/admin/login', (req, res) => {
  res.json({ ok: req.body.password === ADMIN_PASSWORD });
});

// ── Helpers meta ───────────────────────────────────────────────
function readMeta(filename) {
  const p = path.join(UPLOADS_DIR, filename + '.meta.json');
  if (!fs.existsSync(p)) return {};
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return {}; }
}
function saveMeta(filename, data) {
  fs.writeFileSync(path.join(UPLOADS_DIR, filename + '.meta.json'), JSON.stringify(data, null, 2));
}

app.listen(PORT, () => console.log(`✦ Evanns Name server running on port ${PORT}`));
