(function () {
  "use strict";

  var STORAGE_KEY = "uspvpn_lang";

  var translations = {
    en: {
      "nav.about": "About",
      "nav.services": "Services",
      "nav.support": "Support",
      "nav.privacy": "Privacy",
      "nav.contact": "Contact",

      "hero.eyebrow": "Mobile & Network Software",
      "hero.title": "Mobile network solutions, built for reliability",
      "hero.lead": "USPVPN designs and maintains mobile applications and networking tools focused on secure connectivity, stability, and a clean user experience.",
      "hero.cta_primary": "Contact us",
      "hero.cta_secondary": "See what we do",

      "about.tag": "About",
      "about.title": "An independent mobile software developer",
      "about.body": "USPVPN is an independent software developer operated by Individual Entrepreneur Khazhi Bekaevich Tsinaev. We build mobile applications and network utilities for iOS and Android, with a focus on dependable connectivity and straightforward design.",

      "services.tag": "Services",
      "services.title": "What we work on",
      "services.card1.title": "Mobile development",
      "services.card1.body": "Native and cross-platform mobile applications for iOS and Android.",
      "services.card2.title": "Network solutions",
      "services.card2.body": "Secure networking tools, configuration management, and connectivity services.",
      "services.card3.title": "Technical support",
      "services.card3.body": "Ongoing application maintenance and responsive customer support.",

      "support.tag": "Support",
      "support.title": "Need help with one of our apps?",
      "support.body": "If you have any questions about our applications, reach out and we'll get back to you.",
      "support.email_label": "Email",
      "support.response_label": "Response time",
      "support.response_value": "1–2 business days",

      "privacy.tag": "Privacy Policy",
      "privacy.title": "Privacy Policy",
      "privacy.updated": "Last updated: January 2026",
      "privacy.s1.title": "1. Who we are",
      "privacy.s1.body": "USPVPN is operated by Individual Entrepreneur Khazhi Bekaevich Tsinaev (Shali, Chechen Republic, Russia). This policy explains how our mobile applications handle information.",
      "privacy.s2.title": "2. Information we process",
      "privacy.s2.body": "Our applications process only the minimum information required to provide their functionality, such as basic device identifiers and connection diagnostics needed for the app to work correctly.",
      "privacy.s3.title": "3. How we use information",
      "privacy.s3.body": "Information is used solely to operate, maintain, and improve our applications, and to provide customer support when you contact us.",
      "privacy.s4.title": "4. Sharing of information",
      "privacy.s4.body": "We do not sell personal information to third parties. Information is shared only where required to operate the service (e.g. infrastructure providers) or where required by law.",
      "privacy.s5.title": "5. Data retention & security",
      "privacy.s5.body": "We retain information only as long as necessary for the purposes described above and apply reasonable technical measures to protect it.",
      "privacy.s6.title": "6. Your rights",
      "privacy.s6.body": "You may contact us at any time to ask what information we hold about you, or to request that it be corrected or deleted.",
      "privacy.s7.title": "7. Contact",
      "privacy.s7.body": "For privacy-related questions, please contact",

      "contact.tag": "Contact",
      "contact.title": "Get in touch",
      "contact.entity_label": "Individual Entrepreneur",
      "contact.brand_label": "Brand",
      "contact.location_label": "Location",
      "contact.location_value": "Shali, Chechen Republic, Russia",
      "contact.phone_label": "Phone",
      "contact.email_label": "Email",

      "footer.copyright": "© 2026 USPVPN",
      "footer.entity": "Individual Entrepreneur Khazhi Bekaevich Tsinaev"
    },
    ru: {
      "nav.about": "О нас",
      "nav.services": "Услуги",
      "nav.support": "Поддержка",
      "nav.privacy": "Конфиденциальность",
      "nav.contact": "Контакты",

      "hero.eyebrow": "Мобильные и сетевые технологии",
      "hero.title": "Мобильные сетевые решения, созданные для надёжности",
      "hero.lead": "USPVPN разрабатывает и поддерживает мобильные приложения и сетевые инструменты с фокусом на безопасное соединение, стабильность и понятный пользовательский опыт.",
      "hero.cta_primary": "Связаться с нами",
      "hero.cta_secondary": "Что мы делаем",

      "about.tag": "О нас",
      "about.title": "Независимый разработчик мобильного ПО",
      "about.body": "USPVPN — независимый разработчик программного обеспечения, деятельность которого осуществляет индивидуальный предприниматель Цинаев Хажи Бекаевич. Мы создаём мобильные приложения и сетевые утилиты для iOS и Android с акцентом на надёжное соединение и понятный дизайн.",

      "services.tag": "Услуги",
      "services.title": "Чем мы занимаемся",
      "services.card1.title": "Мобильная разработка",
      "services.card1.body": "Нативные и кроссплатформенные мобильные приложения для iOS и Android.",
      "services.card2.title": "Сетевые решения",
      "services.card2.body": "Безопасные сетевые инструменты, управление конфигурацией и сервисы подключения.",
      "services.card3.title": "Техническая поддержка",
      "services.card3.body": "Сопровождение приложений и оперативная поддержка пользователей.",

      "support.tag": "Поддержка",
      "support.title": "Нужна помощь с одним из наших приложений?",
      "support.body": "Если у вас есть вопросы по нашим приложениям, напишите нам — мы ответим.",
      "support.email_label": "Email",
      "support.response_label": "Время ответа",
      "support.response_value": "1–2 рабочих дня",

      "privacy.tag": "Конфиденциальность",
      "privacy.title": "Политика конфиденциальности",
      "privacy.updated": "Обновлено: январь 2026",
      "privacy.s1.title": "1. Кто мы",
      "privacy.s1.body": "Деятельность USPVPN осуществляет индивидуальный предприниматель Цинаев Хажи Бекаевич (г. Шали, Чеченская Республика, Россия). Этот документ объясняет, как наши мобильные приложения обрабатывают информацию.",
      "privacy.s2.title": "2. Какую информацию мы обрабатываем",
      "privacy.s2.body": "Наши приложения обрабатывают только минимально необходимую информацию для работы функций — например, базовые идентификаторы устройства и диагностику подключения, нужную для корректной работы приложения.",
      "privacy.s3.title": "3. Как мы используем информацию",
      "privacy.s3.body": "Информация используется исключительно для работы, поддержки и улучшения наших приложений, а также для оказания технической поддержки при обращении.",
      "privacy.s4.title": "4. Передача информации",
      "privacy.s4.body": "Мы не продаём персональные данные третьим лицам. Информация передаётся только в случаях, необходимых для работы сервиса (например, поставщикам инфраструктуры), либо по требованию закона.",
      "privacy.s5.title": "5. Хранение и защита данных",
      "privacy.s5.body": "Мы храним информацию только в течение срока, необходимого для указанных целей, и применяем разумные технические меры для её защиты.",
      "privacy.s6.title": "6. Ваши права",
      "privacy.s6.body": "Вы можете в любой момент обратиться к нам, чтобы узнать, какая информация о вас хранится, а также запросить её исправление или удаление.",
      "privacy.s7.title": "7. Контакты",
      "privacy.s7.body": "По вопросам конфиденциальности обращайтесь:",

      "contact.tag": "Контакты",
      "contact.title": "Связаться с нами",
      "contact.entity_label": "Индивидуальный предприниматель",
      "contact.brand_label": "Бренд",
      "contact.location_label": "Расположение",
      "contact.location_value": "г. Шали, Чеченская Республика, Россия",
      "contact.phone_label": "Телефон",
      "contact.email_label": "Email",

      "footer.copyright": "© 2026 USPVPN",
      "footer.entity": "ИП Цинаев Хажи Бекаевич"
    }
  };

  function detectInitialLang() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      saved = null;
    }
    if (saved === "ru" || saved === "en") return saved;

    var nav = (navigator.language || navigator.userLanguage || "ru").toLowerCase();
    return nav.indexOf("ru") === 0 ? "ru" : "en";
  }

  function applyLang(lang) {
    var dict = translations[lang] || translations.en;

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    var toggle = document.getElementById("langSwitch");
    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        lang === "ru" ? "Switch to English" : "Переключить на русский"
      );
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable — ignore, language just won't persist */
    }
  }

  /* --------------------------------------------------------------
     Theme (light/dark) — applied early via inline script in <head>
     to avoid a flash of the wrong theme; this just wires the toggle.
  -------------------------------------------------------------- */
  var THEME_KEY = "uspvpn_theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.getElementById("themeSwitch");
    if (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      /* localStorage unavailable — ignore, theme just won't persist */
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var currentLang = detectInitialLang();
    applyLang(currentLang);

    var currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    applyTheme(currentTheme);

    var themeBtn = document.getElementById("themeSwitch");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(currentTheme);
      });
    }

    var switchBtn = document.getElementById("langSwitch");
    if (switchBtn) {
      switchBtn.addEventListener("click", function () {
        currentLang = currentLang === "ru" ? "en" : "ru";
        applyLang(currentLang);
      });
    }

    var navToggle = document.getElementById("navToggle");
    var mobileNav = document.getElementById("main-nav-mobile");
    if (navToggle && mobileNav) {
      navToggle.addEventListener("click", function () {
        var isOpen = mobileNav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      mobileNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          mobileNav.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  });
})();
