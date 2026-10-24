/* ==========================================================================
   TellexApp — script da landing page
   ========================================================================== */

/* --------------------------------------------------------------------------
   CONFIGURAÇÃO DE CONTATOS — edite somente esta parte.

   whatsapp: número com DDD, só números. Ex.: "18999999999"
             (deixe "" enquanto não houver número oficial)
   whatsappMensagem: texto que já aparece escrito ao abrir o WhatsApp.
   email: e-mail comercial. Ex.: "contato@seudominio.com.br"
          (deixe "" enquanto não houver e-mail oficial)
   regiao: região de atendimento exibida na seção de contato.
   -------------------------------------------------------------------------- */
const CONFIG = {
  whatsapp: "",
  whatsappMensagem: "Olá! Vim pelo site da TellexApp e gostaria de mais informações.",
  email: "",
  regiao: "Presidente Prudente, SP",
};

(function () {
  "use strict";

  const header = document.querySelector(".site-header");
  const nav = document.getElementById("menu-principal");
  const toggle = document.querySelector(".menu-toggle");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Contatos ---------- */
  function onlyDigits(value) {
    return String(value || "").replace(/\D/g, "");
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
  }

  function enableContact(type, href, external) {
    const button = document.querySelector('[data-contact="' + type + '"]');
    const soon = document.querySelector('[data-contact-soon="' + type + '"]');
    if (!button) return;
    button.setAttribute("href", href);
    button.removeAttribute("aria-disabled");
    button.removeAttribute("role");
    button.classList.remove("is-disabled");
    if (external) {
      button.setAttribute("target", "_blank");
      button.setAttribute("rel", "noopener noreferrer");
    }
    if (soon) soon.hidden = true;
  }

  function setupContacts() {
    let phone = onlyDigits(CONFIG.whatsapp);
    if (phone.length === 10 || phone.length === 11) phone = "55" + phone; // adiciona o código do Brasil
    if (phone.length >= 12) {
      const text = encodeURIComponent(CONFIG.whatsappMensagem || "");
      enableContact("whatsapp", "https://wa.me/" + phone + (text ? "?text=" + text : ""), true);
    }

    const email = String(CONFIG.email || "").trim();
    if (isValidEmail(email)) {
      enableContact("email", "mailto:" + email, false);
      const value = document.querySelector('[data-contact-value="email"]');
      if (value) value.textContent = email;
    }

    if (CONFIG.regiao) {
      document.querySelectorAll('[data-config="regiao"]').forEach(function (el) {
        el.textContent = CONFIG.regiao;
      });
    }
  }

  /* ---------- Menu móvel ---------- */
  function setMenu(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    document.body.classList.toggle("menu-open", open);
  }

  function setupMenu() {
    if (!nav || !toggle) return;

    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setMenu(false);
        toggle.focus();
      }
    });

    // Fecha o menu se a tela for alargada (ex.: girar o iPhone)
    window.matchMedia("(min-width: 861px)").addEventListener("change", function (e) {
      if (e.matches) setMenu(false);
    });
  }

  /* ---------- Cabeçalho ao rolar ---------- */
  function setupHeader() {
    if (!header) return;
    let ticking = false;
    function update() {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  /* ---------- Link ativo no menu ---------- */
  function setupActiveLink() {
    if (!("IntersectionObserver" in window)) return;
    const links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
    const sections = links
      .map(function (link) { return document.querySelector(link.getAttribute("href")); })
      .filter(Boolean);

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const id = "#" + entry.target.id;
        links.forEach(function (link) {
          const active = link.getAttribute("href") === id;
          link.classList.toggle("is-active", active);
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ---------- Animação de entrada ---------- */
  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Ano no rodapé ---------- */
  function setupYear() {
    const year = document.getElementById("ano-atual");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  setupContacts();
  setupMenu();
  setupHeader();
  setupActiveLink();
  setupReveal();
  setupYear();
})();
