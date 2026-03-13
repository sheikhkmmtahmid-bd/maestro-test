// shared.js — injects navbar, announce bar, and footer into every page

const CURRENT_PAGE = window.location.pathname.split('/').pop() || 'index.html';

function setActive(nav) {
  nav.querySelectorAll('a[data-page]').forEach(link => {
    if (link.dataset.page === CURRENT_PAGE) {
      link.classList.add('active');
    }
  });
}

function injectAnnounceBar() {
  const bar = document.createElement('div');
  bar.className = 'announce-bar';
  bar.innerHTML = `
    <div class="announce-contacts">
      <a href="mailto:info@maestro.com.bd" class="announce-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
        info@maestro.com.bd
      </a>
      <a href="tel:+8801713336401" class="announce-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/></svg>
        +880 1713 336 401
      </a>
      <a href="tel:+8801713336406" class="announce-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/></svg>
        +880 1713 336 406
      </a>
    </div>
    <div class="announce-social">
      <a href="https://www.facebook.com/maestro.com.bd" target="_blank" rel="noopener" aria-label="Facebook">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
      </a>
      <a href="https://www.linkedin.com/company/maestro-solutions-ltd/" target="_blank" rel="noopener" aria-label="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
    </div>
  `;
  document.body.insertBefore(bar, document.body.firstChild);
}

function injectNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.id = 'navbar';
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-logo" aria-label="Maestro Solutions Ltd. — Home">
        <img src="maestro-logo.png" alt="Maestro Solutions Ltd." onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
        <span class="nav-logo-fallback" style="display:none;flex-direction:column;gap:0;">
          <span class="nav-logo-name">MAESTRO<span>.</span></span>
          <span class="nav-logo-tagline">Solutions Ltd.</span>
        </span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html" data-page="index.html">Home</a></li>
        <li><a href="products.html" data-page="products.html">Products &amp; Services</a></li>
        <li><a href="clients.html" data-page="clients.html">Clients</a></li>
        <li><a href="about.html" data-page="about.html">About</a></li>
        <li><a href="contact.html" data-page="contact.html">Contact</a></li>
      </ul>
      <div class="nav-actions">
        <a href="https://user.maestro.com.bd/client/login" target="_blank" class="btn-nav-login">Client Login</a>
        <button class="hamburger" id="hamburger" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="index.html" data-page="index.html">Home</a>
      <a href="products.html" data-page="products.html">Products &amp; Services</a>
      <a href="clients.html" data-page="clients.html">Clients</a>
      <a href="about.html" data-page="about.html">About</a>
      <a href="contact.html" data-page="contact.html">Contact</a>
      <a href="https://user.maestro.com.bd/client/login" target="_blank" class="btn btn-primary mobile-login">Client Login</a>
    </div>
  `;
  document.body.insertBefore(nav, document.body.firstChild);

  // Scroll effect — always scrolled since page content starts below fixed header
  const navbar = document.getElementById('navbar');
  function updateScroll() {
    // Announce bar is always visible; navbar should always show background
    navbar.classList.add('scrolled');
  }
  updateScroll();
  window.addEventListener('scroll', updateScroll, { passive: true });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  setActive(nav);
}

function injectFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="bg-grid"></div>
    <div class="container">
      <div class="footer-main">
        <div class="footer-brand">
          <a href="index.html" style="display:inline-block;margin-bottom:1rem;">
            <img src="maestro-logo.png" alt="Maestro Solutions Ltd." style="height:36px;width:auto;background:transparent;"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='block';">
            <div style="display:none;">
              <div class="footer-brand-name">MAESTRO<span>.</span></div>
              <div class="footer-brand-tag">Solutions Ltd.</div>
            </div>
          </a>
          <p>Bangladesh's trusted provider of IP Log Servers, ISP Billing software, and SMS Gateway solutions. Serving ISPs and enterprises since 2000.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com/maestro.com.bd" target="_blank" rel="noopener" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/maestro-solutions-ltd/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Navigation</h5>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="products.html">Products &amp; Services</a></li>
            <li><a href="clients.html">Our Clients</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="https://user.maestro.com.bd/client/login" target="_blank">Client Portal</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Legal</h5>
          <ul>
            <li><a href="terms.html">Terms &amp; Conditions</a></li>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="refund.html">Return &amp; Refund</a></li>
            <li><a href="delivery.html">Delivery Policy</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Contact</h5>
          <ul class="footer-contact-list">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Flat 3A, Amena Villa, House 226/2/Ta/3, West Agargaon (60 feet), Sher-e-Bangla Nagar, Dhaka-1207</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
              <a href="mailto:info@maestro.com.bd">info@maestro.com.bd</a>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/></svg>
              <span><a href="tel:+8801713336401">+880 1713 336 401</a><br><a href="tel:+8801713336406">+880 1713 336 406</a></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p style="color:var(--text-dim);">© 2017–2026 Maestro Solutions Ltd. All Rights Reserved. Trade License: TRAD/DNCC/138637/2022</p>
        <div class="footer-bottom-links">
          <a href="terms.html">Terms</a>
          <a href="privacy.html">Privacy</a>
          <a href="refund.html">Refund</a>
          <a href="delivery.html">Delivery</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

// Scroll animations
function initScrollAnimations() {
  const els = document.querySelectorAll('.animate-up');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  injectAnnounceBar();
  injectNavbar();
  injectFooter();
  initScrollAnimations();
});