/* ============================================================
   Energy and Services - Interactions & shared components
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Shared markup ---------- */
  var BRAND_MARK =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';

  var NAV_LINKS = [
    { href: "index.html", label: "Accueil" },
    { href: "solutions.html", label: "Solutions" },
    { href: "a-propos.html", label: "À propos" },
    { href: "marques.html", label: "Nos marques" },
    { href: "actualites.html", label: "Actualités" },
    { href: "contact.html", label: "Contact" }
  ];

  function currentPage() {
    var path = window.location.pathname.split("/").pop();
    return path === "" ? "index.html" : path;
  }

  function buildNav() {
    var host = document.querySelector("[data-nav]");
    if (!host) return;
    var page = currentPage();
    var links = NAV_LINKS.map(function (l) {
      var active = l.href === page ? " active" : "";
      return '<a href="' + l.href + '" class="' + active.trim() + '">' + l.label + "</a>";
    }).join("");

    host.innerHTML =
      '<nav class="nav" id="siteNav">' +
        '<div class="nav__inner">' +
          '<a class="brand" href="index.html" aria-label="Energy and Services - Accueil">' +
            '<span class="brand__mark">' + BRAND_MARK + "</span>" +
            "<span>Energy <span style=\"color:var(--sun-400)\">&amp;</span> Services<small>Solutions solaires</small></span>" +
          "</a>" +
          '<div class="nav__links" id="navLinks">' + links + "</div>" +
          '<div class="nav__cta">' +
            '<a class="btn btn--ghost" href="https://www.boutique-es-bf.com/" target="_blank" rel="noopener">Boutique</a>' +
            '<a class="btn btn--primary" href="contact.html">Demander un devis</a>' +
            '<button class="nav__toggle" id="navToggle" aria-label="Menu" aria-expanded="false"><span></span></button>' +
          "</div>" +
        "</div>" +
      "</nav>";
  }

  function buildFooter() {
    var host = document.querySelector("[data-footer]");
    if (!host) return;
    var year = new Date().getFullYear();
    host.innerHTML =
      '<footer class="footer">' +
        '<div class="container">' +
          '<div class="footer__top">' +
            "<div>" +
              '<a class="brand" href="index.html">' +
                '<span class="brand__mark">' + BRAND_MARK + "</span>" +
                "<span>Energy <span style=\"color:var(--sun-400)\">&amp;</span> Services</span>" +
              "</a>" +
              "<p>Distributeur de solutions de qualité, sûres et fiables pour la production, la transformation et le stockage de l'énergie solaire, ainsi que pour tout type de pompage.</p>" +
              '<div class="footer__social">' +
                '<a href="https://www.facebook.com/EnergyandServices/" target="_blank" rel="noopener" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg></a>' +
                '<a href="https://www.linkedin.com/company/66931320/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z"/></svg></a>' +
                '<a href="https://youtube.com/@energyandservices2357" target="_blank" rel="noopener" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12zM9.8 15.3V8.7l6 3.3z"/></svg></a>' +
              "</div>" +
            "</div>" +
            '<div class="footer__col">' +
              "<h4>Navigation</h4>" +
              NAV_LINKS.map(function (l) { return '<a href="' + l.href + '">' + l.label + "</a>"; }).join("") +
            "</div>" +
            '<div class="footer__col">' +
              "<h4>Espaces</h4>" +
              '<a href="https://www.boutique-es-bf.com/" target="_blank" rel="noopener">Boutique en ligne</a>' +
              '<a href="contact.html">E&amp;S Académie</a>' +
              '<a href="contact.html">E&amp;S Pro (revendeurs)</a>' +
              '<a href="contact.html">E&amp;S Export</a>' +
            "</div>" +
            '<div class="footer__col">' +
              "<h4>Contact</h4>" +
              '<a href="tel:+22651416060">+226 51 41 60 60</a>' +
              '<a href="mailto:contact@es-bf.com">contact@es-bf.com</a>' +
              '<a href="contact.html">Agence Ouagadougou</a>' +
              '<a href="contact.html">Agence Bobo-Dioulasso</a>' +
            "</div>" +
          "</div>" +
          '<div class="footer__bottom">' +
            "<span>© 2012 - " + year + " Energy and Services. Tous droits réservés.</span>" +
            "<span>Énergie solaire de qualité - Burkina Faso</span>" +
          "</div>" +
        "</div>" +
      "</footer>";
  }

  /* ---------- Nav behaviour ---------- */
  function navBehaviour() {
    var nav = document.getElementById("siteNav");
    var toggle = document.getElementById("navToggle");
    var links = document.getElementById("navLinks");
    if (!nav) return;

    var onScroll = function () {
      nav.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle && links) {
      toggle.addEventListener("click", function () {
        var open = links.classList.toggle("open");
        toggle.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", String(open));
      });
      links.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          links.classList.remove("open");
          toggle.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  /* ---------- Scroll reveal ---------- */
  function reveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (i) { i.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (i) { io.observe(i); });
  }

  /* ---------- Animated counters ---------- */
  function counters() {
    var nums = document.querySelectorAll("[data-count]");
    if (!nums.length || !("IntersectionObserver" in window)) {
      nums.forEach(function (n) { n.textContent = n.getAttribute("data-count") + (n.getAttribute("data-suffix") || ""); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var target = parseFloat(el.getAttribute("data-count"));
        var suffix = el.getAttribute("data-suffix") || "";
        var prefix = el.getAttribute("data-prefix") || "";
        var dur = 1400, start = null;
        var step = function (ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          var val = Math.round(target * eased);
          el.textContent = prefix + val.toLocaleString("fr-FR") + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* ---------- Back to top ---------- */
  function backToTop() {
    var btn = document.getElementById("toTop");
    if (!btn) return;
    window.addEventListener("scroll", function () {
      btn.classList.toggle("show", window.scrollY > 600);
    }, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Contact form (client-side demo) ---------- */
  function contactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form__status");
      var name = form.querySelector("[name=name]");
      var email = form.querySelector("[name=email]");
      var msg = form.querySelector("[name=message]");
      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name.value.trim() || !email.value.trim() || !msg.value.trim()) {
        status.textContent = "Veuillez remplir tous les champs requis.";
        status.className = "form__status err";
        return;
      }
      if (!emailRe.test(email.value)) {
        status.textContent = "Veuillez saisir une adresse e-mail valide.";
        status.className = "form__status err";
        return;
      }
      status.textContent = "Merci ! Votre message a bien été envoyé. Notre équipe vous répondra rapidement.";
      status.className = "form__status ok";
      form.reset();
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    buildNav();
    buildFooter();
    navBehaviour();
    reveal();
    counters();
    backToTop();
    contactForm();
    document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());
  });
})();
