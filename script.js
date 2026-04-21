// ===================================================
//  STICKERZONE — script.js
// ===================================================
//  👇 AJOUTE TES PACKS ICI — C'est tout !
//
//  emoji    → l'emoji sur la carte (si pas d'image)
//  image    → URL de l'image du pack (ou "" pour emoji)
//  nom      → nom du pack
//  stickers → nombre de stickers
//  taille   → ex: "1.2 MB"
//  lien     → ton lien WhatsApp
//  badge    → "Populaire", "Nouveau" ou "" (vide)
// ===================================================

const packs = [

  // ✅ PACK 1 — 3D EMOJI
  { emoji: "😎", image: "https://res.cloudinary.com/db7r7c4e5/image/upload/v1776736250/zdkunfw3w4uwubgwmyoo.jpg", nom: "3D Emoji", stickers: 17, taille: "3.9 MB", lien: "https://whatsapp.com/channel/0029VbCRcpAIt5ro4kShr414/100", badge: "Populaire" },

  // 🔽 AJOUTE TES PACKS EN DESSOUS
  // Pour une image : image: "https://tonlien.jpg"
  // Sans image     : image: "" (l'emoji sera utilisé)

  // ❤️ LOVE
  { emoji: "❤️", image: "", nom: "Love Vibes", stickers: 0, taille: "- MB", lien: "#", badge: "Nouveau" },

  // 😂 HUMOUR
  { emoji: "😂", image: "", nom: "Humour Pack", stickers: 0, taille: "- MB", lien: "#", badge: "" },

  // 🌸 FLORAN
  { emoji: "🌸", image: "", nom: "Floran", stickers: 0, taille: "- MB", lien: "#", badge: "" },

  // 🎌 MANGAS
  { emoji: "🎌", image: "", nom: "Mangas Zone", stickers: 0, taille: "- MB", lien: "#", badge: "" },

];

// ===================================================
//  🚫 NE TOUCHE PAS AU CODE EN DESSOUS
// ===================================================

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
  grid.innerHTML = listePacks.map(pack => `
    <div class="pack-card">
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
        <a href="${pack.lien}" target="_blank" class="btn-add">${btn}</a>
      </div>
      ${pack.badge ? `<span class="pack-badge ${pack.badge === 'Nouveau' ? 'new' : ''}">${pack.badge}</span>` : ''}
    </div>
  `).join('');
  initScrollReveal();
}

function genererPacks(lang) { afficherPacks(packs, lang); }

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

  const packsList = packs.map((p, i) => `${i}: ${p.nom} (badge: ${p.badge || 'aucun'})`).join('\n');

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
      const indices = text.split(',').map(i => parseInt(i.trim())).filter(i => !isNaN(i) && i < packs.length);
      const packsFiltrés = indices.map(i => packs[i]);
      afficherPacks(packsFiltrés, lang);
      status.className = 'search-status result';
      status.textContent = `✨ ${packsFiltrés.length} pack(s) trouvé(s) pour "${query}"`;
    }
  } catch (e) {
    const q = query.toLowerCase();
    const packsFiltrés = packs.filter(p => p.nom.toLowerCase().includes(q) || (p.badge && p.badge.toLowerCase().includes(q)));
    afficherPacks(packsFiltrés.length ? packsFiltrés : packs, lang);
    status.className = 'search-status result';
    status.textContent = packsFiltrés.length ? `✨ ${packsFiltrés.length} pack(s) trouvé(s)` : '😕 Aucun résultat exact, voici tous les packs.';
  }

  btn.disabled = false;
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLang();
  applyTranslations(lang);
  genererPacks(lang);
  initScrollReveal();

  const btn = document.getElementById('search-btn');
  const input = document.getElementById('search-input');
  if (btn) btn.addEventListener('click', () => rechercherPacks(input.value));
  if (input) input.addEventListener('keydown', e => { if (e.key === 'Enter') rechercherPacks(input.value); });
});
