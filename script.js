// ===========================
//  STICKERZONE — script.js
//  Auto i18n + dynamic packs
// ===========================

// =============================================
//  👇 MODIFIE ICI TES PACKS — C'est tout !
//
//  emoji   : l'emoji affiché sur la carte
//  image   : chemin vers une image (optionnel)
//            ex: "images/monpack.png"
//            si vide, l'emoji sera utilisé
//  nom     : le nom du pack
//  stickers: nombre de stickers
//  taille  : taille du fichier
//  lien    : ton lien Sticker.ly
//  badge   : "Populaire", "Nouveau" ou "" (vide)
//  nouveauBadge: true si badge rouge "Nouveau"
// =============================================

const packs = [
  {
    emoji: "😎",
    image: "",
    nom: "3D EMOJI",
    stickers: 17,
    taille: "3.9 MB",
    lien: "https://whatsapp.com/channel/0029VbCRcpAIt5ro4kShr414/100"
    badge: "Populaire",
    nouveauBadge: false
  },
  {
    emoji: "👻",
    image: "",
    nom: "Ghost Vibes",
    stickers: 24,
    taille: "0.9 MB",
    lien: "#",
    badge: "",
    nouveauBadge: false
  },
  {
    emoji: "🔥",
    image: "",
    nom: "Mood Fire",
    stickers: 20,
    taille: "1.3 MB",
    lien: "#",
    badge: "Nouveau",
    nouveauBadge: true
  },
  {
    emoji: "💀",
    image: "",
    nom: "Dark Humor",
    stickers: 16,
    taille: "0.8 MB",
    lien: "#",
    badge: "",
    nouveauBadge: false
  },
  {
    emoji: "🤩",
    image: "",
    nom: "Star Energy",
    stickers: 22,
    taille: "1.0 MB",
    lien: "#",
    badge: "",
    nouveauBadge: false
  },
  {
    emoji: "😎",
    image: "",
    nom: "Chill Zone",
    stickers: 18,
    taille: "1.2 MB",
    lien: "#",
    badge: "",
    nouveauBadge: false
  },
];

// =============================================
//  NE TOUCHE PAS AU CODE EN DESSOUS 👇
// =============================================

const translations = {
  fr: {
    nav_packs: "Packs",
    nav_about: "À propos",
    hero_badge: "✨ 100% Gratuit",
    hero_title: "Des stickers qui <em>parlent</em> pour toi",
    hero_sub: "Packs de stickers pour WhatsApp — drôles, expressifs, uniques. Ajoute-les en un clic.",
    hero_cta: "Voir les packs →",
    stat_packs: "Packs",
    stat_stickers: "Stickers",
    stat_free: "Gratuit",
    packs_title: "Packs disponibles",
    packs_sub: "Clique sur un pack pour l'ajouter à WhatsApp",
    btn_add: "✅ Ajouter à WhatsApp",
    badge_popular: "Populaire",
    badge_new: "Nouveau",
    about_title: "Pourquoi StickerZone ?",
    about_1_title: "Rapide",
    about_1_text: "Ajoute un pack en un seul clic, directement dans WhatsApp.",
    about_2_title: "Gratuit",
    about_2_text: "Tous les packs sont 100% gratuits, sans inscription.",
    about_3_title: "Mis à jour",
    about_3_text: "De nouveaux packs ajoutés régulièrement.",
    footer_text: "© 2025 StickerZone. Tous droits réservés.",
    footer_privacy: "Confidentialité",
    footer_contact: "Contact",
  },
  es: {
    nav_packs: "Packs",
    nav_about: "Acerca de",
    hero_badge: "✨ 100% Gratis",
    hero_title: "Stickers que <em>hablan</em> por ti",
    hero_sub: "Packs de stickers para WhatsApp — graciosos, expresivos, únicos. Agrégalos en un clic.",
    hero_cta: "Ver los packs →",
    stat_packs: "Packs",
    stat_stickers: "Stickers",
    stat_free: "Gratis",
    packs_title: "Packs disponibles",
    packs_sub: "Toca un pack para agregarlo a WhatsApp",
    btn_add: "✅ Agregar a WhatsApp",
    badge_popular: "Popular",
    badge_new: "Nuevo",
    about_title: "¿Por qué StickerZone?",
    about_1_title: "Rápido",
    about_1_text: "Agrega un pack con un solo clic, directo en WhatsApp.",
    about_2_title: "Gratis",
    about_2_text: "Todos los packs son 100% gratis, sin registro.",
    about_3_title: "Actualizado",
    about_3_text: "Nuevos packs agregados regularmente.",
    footer_text: "© 2025 StickerZone. Todos los derechos reservados.",
    footer_privacy: "Privacidad",
    footer_contact: "Contacto",
  },
  en: {
    nav_packs: "Packs",
    nav_about: "About",
    hero_badge: "✨ 100% Free",
    hero_title: "Stickers that <em>speak</em> for you",
    hero_sub: "WhatsApp sticker packs — funny, expressive, unique. Add them in one click.",
    hero_cta: "Browse packs →",
    stat_packs: "Packs",
    stat_stickers: "Stickers",
    stat_free: "Free",
    packs_title: "Available Packs",
    packs_sub: "Tap a pack to add it to WhatsApp",
    btn_add: "✅ Add to WhatsApp",
    badge_popular: "Popular",
    badge_new: "New",
    about_title: "Why StickerZone?",
    about_1_title: "Fast",
    about_1_text: "Add a pack in one click, straight into WhatsApp.",
    about_2_title: "Free",
    about_2_text: "All packs are 100% free, no sign-up needed.",
    about_3_title: "Updated",
    about_3_text: "New packs added regularly.",
    footer_text: "© 2025 StickerZone. All rights reserved.",
    footer_privacy: "Privacy",
    footer_contact: "Contact",
  },
  pt: {
    nav_packs: "Packs",
    nav_about: "Sobre",
    hero_badge: "✨ 100% Grátis",
    hero_title: "Stickers que <em>falam</em> por você",
    hero_sub: "Packs de stickers para WhatsApp — engraçados, expressivos, únicos. Adicione com um clique.",
    hero_cta: "Ver os packs →",
    stat_packs: "Packs",
    stat_stickers: "Stickers",
    stat_free: "Grátis",
    packs_title: "Packs disponíveis",
    packs_sub: "Clique num pack para adicioná-lo ao WhatsApp",
    btn_add: "✅ Adicionar ao WhatsApp",
    badge_popular: "Popular",
    badge_new: "Novo",
    about_title: "Por que StickerZone?",
    about_1_title: "Rápido",
    about_1_text: "Adicione um pack com um clique, direto no WhatsApp.",
    about_2_title: "Grátis",
    about_2_text: "Todos os packs são 100% gratuitos, sem cadastro.",
    about_3_title: "Atualizado",
    about_3_text: "Novos packs adicionados regularmente.",
    footer_text: "© 2025 StickerZone. Todos os direitos reservados.",
    footer_privacy: "Privacidade",
    footer_contact: "Contato",
  },
  ar: {
    nav_packs: "باقات",
    nav_about: "حول",
    hero_badge: "✨ مجاني 100%",
    hero_title: "ملصقات <em>تتكلم</em> عنك",
    hero_sub: "باقات ملصقات واتساب — مضحكة، معبرة، فريدة. أضفها بنقرة واحدة.",
    hero_cta: "تصفح الباقات →",
    stat_packs: "باقة",
    stat_stickers: "ملصق",
    stat_free: "مجاني",
    packs_title: "الباقات المتاحة",
    packs_sub: "انقر على باقة لإضافتها إلى واتساب",
    btn_add: "✅ إضافة إلى واتساب",
    badge_popular: "شائع",
    badge_new: "جديد",
    about_title: "لماذا StickerZone؟",
    about_1_title: "سريع",
    about_1_text: "أضف باقة بنقرة واحدة مباشرة في واتساب.",
    about_2_title: "مجاني",
    about_2_text: "جميع الباقات مجانية 100% بدون تسجيل.",
    about_3_title: "محدّث",
    about_3_text: "باقات جديدة تُضاف بانتظام.",
    footer_text: "© 2025 StickerZone. جميع الحقوق محفوظة.",
    footer_privacy: "الخصوصية",
    footer_contact: "اتصل بنا",
  }
};

// Detect language from browser
function detectLang() {
  const lang = navigator.language || navigator.userLanguage || 'fr';
  const code = lang.slice(0, 2).toLowerCase();
  if (translations[code]) return code;
  return 'fr'; // fallback
}

// Apply translations
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // RTL support for Arabic
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }
}

// Scroll reveal animation
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

// Génère les cartes de packs dynamiquement
function genererPacks(lang) {
  const grid = document.getElementById('packs-grid');
  if (!grid) return;

  const btnTexte = {
    fr: "✅ Ajouter à WhatsApp",
    es: "✅ Agregar a WhatsApp",
    en: "✅ Add to WhatsApp",
    pt: "✅ Adicionar ao WhatsApp",
    ar: "✅ إضافة إلى واتساب"
  };

  const btn = btnTexte[lang] || btnTexte['fr'];

  grid.innerHTML = packs.map(pack => `
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
      ${pack.badge ? `<span class="pack-badge ${pack.nouveauBadge ? 'new' : ''}">${pack.badge}</span>` : ''}
    </div>
  `).join('');
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLang();
  applyTranslations(lang);
  genererPacks(lang);
  initScrollReveal();
});
