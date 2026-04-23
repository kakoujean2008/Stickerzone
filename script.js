// ===================================================
//  STICKERZONE — script.js
// ===================================================
//  Les packs sont gérés via la page admin.html
//  Tu n'as plus besoin de modifier ce fichier !
// ===================================================

const BIN_ID = '69e86197856a6821895ce78a';
const MASTER_KEY = '$2a$10$a5RloqbsNDWK5G9sbWl6BuegdvgHPCVOI0stxKK0DcWnUSJ5nX83i';
const API_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`;

// Packs de secours si JSONbin est indisponible
const packsSecours = [
  { emoji: "❤️", image: "", nom: "Love Vibes", stickers: 0, taille: "- MB", lien: "https://wa.me/stickerpack/XOXO", badge: "Nouveau" },
  { emoji: "🐦", image: "", nom: "Fearless Bird", stickers: 0, taille: "- MB", lien: "https://wa.me/stickerpack/FearlessBird", badge: "" },
  { emoji: "🕺", image: "", nom: "Dance To The Beat", stickers: 0, taille: "- MB", lien: "https://wa.me/stickerpack/DanceToTheBeat", badge: "" },
  { emoji: "😂", image: "", nom: "Humour Pack", stickers: 0, taille: "- MB", lien: "#", badge: "" },
  { emoji: "🌸", image: "", nom: "Floran", stickers: 0, taille: "- MB", lien: "#", badge: "" },
  { emoji: "🎌", image: "", nom: "Mangas Zone", stickers: 0, taille: "- MB", lien: "#", badge: "" },
];

let packsGlobal = [];

const translations = {
  fr: {
    nav_packs: "Packs", nav_about: "À propos", hero_badge: "✨ 100% Gratuit",
    hero_title: "Des stickers qui <em>parlent</em> pour toi",
    hero_sub: "Packs de stickers pour WhatsApp — drôles, expressifs, uniques. Ajoute-les en un clic.",
    hero_cta: "Voir les packs →", stat_packs: "Packs", stat_stickers: "Stickers", stat_free: "Gratuit",
    packs_title: "Packs disponibles", packs_sub: "Clique sur un pack pour l'ajouter à WhatsApp",
    about_title: "Pourquoi StickerZone ?", about_1_title: "Rapide", about_1_text: "Ajoute un pack en un seul clic, directement dans WhatsApp.",
    about_2_title: "Gratuit", about_2_text: "Tous les packs sont 100% gratuits, sans inscription.",
    about_3_title: "Mis à jour", about_3_text: "De nouveaux packs ajoutés régulièrement.",
    footer_text: "© 2025 StickerZone. Tous droits réservés.", footer_privacy: "Confidentialité", footer_contact: "Contact",
  },
  es: {
    nav_packs: "Packs", nav_about: "Acerca de", hero_badge: "✨ 100% Gratis",
    hero_title: "Stickers que <em>hablan</em> por ti",
    hero_sub: "Packs de stickers para WhatsApp — graciosos, expresivos, únicos. Agrégalos en un clic.",
    hero_cta: "Ver los packs →", stat_packs: "Packs", stat_stickers: "Stickers", stat_free: "Gratis",
    packs_title: "Packs disponibles", packs_sub: "Toca un pack para agregarlo a WhatsApp",
    about_title: "¿Por qué StickerZone?", about_1_title: "Rápido", about_1_text: "Agrega un pack con un solo clic, directo en WhatsApp.",
    about_2_title: "Gratis", about_2_text: "Todos los packs son 100% gratis, sin registro.",
    about_3_title: "Actualizado", about_3_text: "Nuevos packs agregados regularmente.",
    footer_text: "© 2025 StickerZone. Todos los derechos reservados.", footer_privacy: "Privacidad", footer_contact: "Contacto",
  },
  en: {
    nav_packs: "Packs", nav_about: "About", hero_badge: "✨ 100% Free",
    hero_title: "Stickers that <em>speak</em> for you",
    hero_sub: "WhatsApp sticker packs — funny, expressive, unique. Add them in one click.",
    hero_cta: "Browse packs →", stat_packs: "Packs", stat_stickers: "Stickers", stat_free: "Free",
    packs_title: "Available Packs", packs_sub: "Tap a pack to add it to WhatsApp",
    about_title: "Why StickerZone?", about_1_title: "Fast", about_1_text: "Add a pack in one click, straight into WhatsApp.",
    about_2_title: "Free", about_2_text: "All packs are 100% free, no sign-up needed.",
    about_3_title: "Updated", about_3_text: "New packs added regularly.",
    footer_text: "© 2025 StickerZone. All rights reserved.", footer_privacy: "Privacy", footer_contact: "Contact",
  },
  pt: {
    nav_packs: "Packs", nav_about: "Sobre", hero_badge: "✨ 100% Grátis",
    hero_title: "Stickers que <em>falam</em> por você",
    hero_sub: "Packs de stickers para WhatsApp — engraçados, expressivos, únicos. Adicione com um clique.",
    hero_cta: "Ver os packs →", stat_packs: "Packs", stat_stickers: "Stickers", stat_free: "Grátis",
    packs_title: "Packs disponíveis", packs_sub: "Clique num pack para adicioná-lo ao WhatsApp",
    about_title: "Por que StickerZone?", about_1_title: "Rápido", about_1_text: "Adicione um pack com um clique, direto no WhatsApp.",
    about_2_title: "Grátis", about_2_text: "Todos os packs são 100% gratuitos, sem cadastro.",
    about_3_title: "Atualizado", about_3_text: "Novos packs adicionados regularmente.",
    footer_text: "© 2025 StickerZone. Todos os direitos reservados.", footer_privacy: "Privacidade", footer_contact: "Contato",
  },
  ar: {
    nav_packs: "باقات", nav_about: "حول", hero_badge: "✨ مجاني 100%",
    hero_title: "ملصقات <em>تتكلم</em> عنك",
    hero_sub: "باقات ملصقات واتساب — مضحكة، معبرة، فريدة. أضفها بنقرة واحدة.",
    hero_cta: "تصفح الباقات →", stat_packs: "باقة", stat_stickers: "ملصق", stat_free: "مجاني",
    packs_title: "الباقات المتاحة", packs_sub: "انقر على باقة لإضافتها إلى واتساب",
    about_title: "لماذا StickerZone؟", about_1_title: "سريع", about_1_text: "أضف باقة بنقرة واحدة مباشرة في واتساب.",
    about_2_title: "مجاني", about_2_text: "جميع الباقات مجانية 100% بدون تسجيل.",
    about_3_title: "محدّث", about_3_text: "باقات جديدة تُضاف بانتظام.",
    footer_text: "© 2025 StickerZone. جميع الحقوق محفوظة.", footer_privacy: "الخصوصية", footer_contact: "اتصل بنا",
  }
};

function detectLang() {
  const lang = navigator.language || navigator.userLanguage || 'fr';
  const code = lang.slice(0, 2).toLowerCase();
  return translations[code] ? code : 'fr';
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);
}

function afficherPacks(listePacks, lang) {
  const grid = document.getElementById('packs-grid');
  if (!grid) return;
  const btnTexte = {
    fr: "✅ Ajouter à WhatsApp", es: "✅ Agregar a WhatsApp",
    en: "✅ Add to WhatsApp", pt: "✅ Adicionar ao WhatsApp", ar: "✅ إضافة إلى واتساب"
  };
  const btn = btnTexte[lang] || btnTexte['fr'];
  grid.innerHTML = listePacks.map(pack => {
    const ancre = pack.nom.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    return `
    <div class="pack-card" id="${ancre}">
      <div class="pack-thumb">
        ${pack.image
          ? `<img src="${pack.image}" alt="${pack.nom}" style="width:100%;height:100%;object-fit:cover;">`
          : `<span class="pack-emoji">${pack.emoji}</span>`
        }
      </div>
      <div class="pack-info">
        <h3 class="pack-name">${pack.nom}</h3>
        <div class="pack-meta">
          <span>📦 ${pack.stickers} stickers</span>
          <span>⚖️ ${pack.taille}</span>
        </div>
        <a href="${pack.lien}" target="_blank" class="btn-add" onclick="afficherBullePub(event, '${pack.lien}')">${btn}</a>
        <button class="btn-share" onclick="partagePack('${pack.nom}', '${ancre}')">🔗 Partager</button>
      </div>
      ${pack.badge ? `<span class="pack-badge ${pack.badge === 'Nouveau' ? 'new' : ''}">${pack.badge}</span>` : ''}
    </div>
  `}).join('');
  initScrollReveal();
}

async function genererPacks(lang) {
  // Afficher les packs de secours immédiatement
  packsGlobal = packsSecours;
  afficherPacks(packsGlobal, lang);

  // Charger les vrais packs depuis JSONbin en arrière-plan
  try {
    const res = await fetch(API_URL, { headers: { 'X-Master-Key': MASTER_KEY } });
    const data = await res.json();
    if (data.record && data.record.length) {
      packsGlobal = data.record;
      afficherPacks(packsGlobal, lang);
      scrollVersAncre();
    }
  } catch (e) {
    // Garder les packs de secours si JSONbin échoue
  }
}

function initScrollReveal() {
  const cards = document.querySelectorAll('.pack-card, .about-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    observer.observe(card);
  });
}

async function rechercherPacks(query) {
  const status = document.getElementById('search-status');
  const btn = document.getElementById('search-btn');
  const lang = detectLang();

  if (!query.trim()) {
    genererPacks(lang);
    status.textContent = '';
    return;
  }

  status.className = 'search-status loading';
  status.textContent = '🔍 Recherche en cours...';
  btn.disabled = true;

  const packsList = packsGlobal.map((p, i) => `${i}: ${p.nom} (badge: ${p.badge || 'aucun'})`).join('\n');

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 200,
        messages: [{
          role: 'user',
          content: `Tu es un assistant qui aide à trouver des packs de stickers WhatsApp.

Voici les packs disponibles:
${packsList}

L'utilisateur cherche: "${query}"

Réponds UNIQUEMENT avec les indices des packs pertinents séparés par des virgules.
Ex: 0,2
Si aucun pack ne correspond, réponds: aucun`
        }]
      })
    });

    const data = await response.json();
    const text = data.content[0].text.trim();

    if (text === 'aucun') {
      status.className = 'search-status result';
      status.textContent = '😕 Aucun pack trouvé pour cette recherche.';
      document.getElementById('packs-grid').innerHTML = '';
    } else {
      const indices = text.split(',').map(i => parseInt(i.trim())).filter(i => !isNaN(i) && i < packsGlobal.length);
      const packsFiltrés = indices.map(i => packsGlobal[i]);
      afficherPacks(packsFiltrés, lang);
      status.className = 'search-status result';
      status.textContent = `✨ ${packsFiltrés.length} pack(s) trouvé(s) pour "${query}"`;
    }
  } catch (e) {
    const q = query.toLowerCase();
    const packsFiltrés = packsGlobal.filter(p => p.nom.toLowerCase().includes(q) || (p.badge && p.badge.toLowerCase().includes(q)));
    afficherPacks(packsFiltrés.length ? packsFiltrés : packsGlobal, lang);
    status.className = 'search-status result';
    status.textContent = packsFiltrés.length ? `✨ ${packsFiltrés.length} pack(s) trouvé(s)` : '😕 Aucun résultat exact, voici tous les packs.';
  }

  btn.disabled = false;
}

// ===================================================
//  BULLE PUB AVANT TÉLÉCHARGEMENT
// ===================================================
const SMARTLINK = 'https://www.profitablecpmratenetwork.com/d3xb0mfrgm?key=900ea8cae53705a95abbcf6637a1b67e';

function afficherBullePub(event, lienSticker) {
  event.preventDefault();

  // Créer la bulle si elle n'existe pas
  let bulle = document.getElementById('ad-bulle');
  if (!bulle) {
    bulle = document.createElement('div');
    bulle.id = 'ad-bulle';
    bulle.innerHTML = `
      <div class="ad-bulle-box">
        <div class="ad-bulle-icon">📢</div>
        <h3 class="ad-bulle-title">Une pub de 5 secondes avant d'accéder au sticker</h3>
        <p class="ad-bulle-text">Merci de soutenir StickerZone ! 😊</p>
        <div class="ad-bulle-timer-wrap">
          <div class="ad-bulle-timer" id="ad-bulle-timer">5</div>
        </div>
        <button class="ad-bulle-btn" id="ad-bulle-btn" onclick="ouvrirPub()">👁️ Regarder la pub</button>
        <div class="ad-bulle-accordé" id="ad-bulle-accordé" style="display:none;">
          <p>✅ Sticker accordé !</p>
          <a id="ad-bulle-lien" href="#" target="_blank" class="btn-add" style="margin-top:12px;">🎉 Accéder au sticker</a>
        </div>
      </div>
    `;
    bulle.style.cssText = `
      position:fixed;inset:0;z-index:9999;
      background:rgba(0,0,0,0.7);backdrop-filter:blur(6px);
      display:flex;align-items:center;justify-content:center;
      animation:fadeIn 0.3s ease;
    `;
    document.body.appendChild(bulle);
    bulle.addEventListener('click', e => { if (e.target === bulle) fermerBullePub(); });
  }

  // Mettre le lien du sticker
  document.getElementById('ad-bulle-lien').href = lienSticker;
  document.getElementById('ad-bulle-accordé').style.display = 'none';
  document.getElementById('ad-bulle-btn').style.display = 'block';
  bulle.style.display = 'flex';

  // Démarrer le timer
  let seconds = 5;
  document.getElementById('ad-bulle-timer').textContent = seconds;
  const interval = setInterval(() => {
    seconds--;
    document.getElementById('ad-bulle-timer').textContent = seconds;
    if (seconds <= 0) {
      clearInterval(interval);
      document.getElementById('ad-bulle-accordé').style.display = 'block';
      document.getElementById('ad-bulle-btn').style.display = 'none';
    }
  }, 1000);

  bulle._interval = interval;
}

function ouvrirPub() {
  window.open(SMARTLINK, '_blank');
}

function fermerBullePub() {
  const bulle = document.getElementById('ad-bulle');
  if (bulle) {
    clearInterval(bulle._interval);
    bulle.style.display = 'none';
  }
}


function partagePack(nom, ancre) {
  const lien = `${window.location.origin}${window.location.pathname}#${ancre}`;
  if (navigator.share) {
    navigator.share({
      title: `StickerZone — ${nom}`,
      text: `Télécharge ce pack de stickers WhatsApp gratuit : ${nom} 🎉`,
      url: lien
    });
  } else {
    navigator.clipboard.writeText(lien).then(() => {
      alert('✅ Lien copié : ' + lien);
    });
  }
}

// Scroll vers l'ancre au chargement
function scrollVersAncre() {
  const hash = window.location.hash.slice(1);
  if (hash) {
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 800);
  }
}

// Timer bulle d'accueil
function initBubbleTimer() {
  const overlay = document.getElementById('bubble-overlay');
  const timerEl = document.getElementById('bubble-timer');
  const closeBtn = document.getElementById('bubble-close');
  if (!overlay || !timerEl || !closeBtn) return;

  let seconds = 5;
  timerEl.textContent = seconds;

  const interval = setInterval(() => {
    seconds--;
    timerEl.textContent = seconds;
    if (seconds <= 0) {
      clearInterval(interval);
      closeBtn.disabled = false;
      closeBtn.classList.add('active');
    }
  }, 1000);

  closeBtn.addEventListener('click', () => {
    overlay.style.opacity = '0';
    overlay.style.transform = 'scale(0.95)';
    setTimeout(() => { overlay.style.display = 'none'; }, 300);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLang();
  applyTranslations(lang);
  genererPacks(lang);
  initScrollReveal();

  initBubbleTimer();
  const btn = document.getElementById('search-btn');
  const input = document.getElementById('search-input');
  if (btn) btn.addEventListener('click', () => rechercherPacks(input.value));
  if (input) input.addEventListener('keydown', e => { if (e.key === 'Enter') rechercherPacks(input.value); });
});
