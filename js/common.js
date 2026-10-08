/* =========================================================
   THE SIGNAL — shared chrome (ticker, masthead, nav, footer)
   and small rendering helpers used by every page.
   ========================================================= */

const SITE_NAV = [
  { href: "index.html", label: "Home", key: "home" },
  { href: "world.html", label: "World", key: "world" },
  { href: "technology.html", label: "Technology", key: "technology" },
  { href: "business.html", label: "Business", key: "business" },
  { href: "sports.html", label: "Sports", key: "sports" },
  { href: "entertainment.html", label: "Entertainment", key: "entertainment" },
  { href: "about.html", label: "About", key: "about" },
  { href: "contact.html", label: "Contact", key: "contact" },
];

function escapeHtml(str){
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderTicker(){
  const items = getLatest(6);
  const strip = items.map(a => `
    <span class="ticker__item">
      <span class="ticker__dot">●</span>
      <a href="article.html?id=${a.id}">${escapeHtml(a.headline)}</a>
    </span>`).join("");
  // duplicate the strip so the 50%-width keyframe loops seamlessly
  return `
  <div class="ticker" role="region" aria-label="Latest headlines ticker">
    <div class="ticker__inner">
      <span class="ticker__tag">LIVE</span>${strip}
      <span class="ticker__tag">LIVE</span>${strip}
    </div>
  </div>`;
}

function renderMasthead(){
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  return `
  <header class="masthead">
    <div class="masthead__date">
      <span>${dateStr}</span>
      <span>VOL. 1 · NO. 26</span>
      <span>SAMPLE EDITION</span>
    </div>
    <div class="masthead__logo"><a href="index.html">THE SIGNAL<span class="dot">.</span></a></div>
    <div class="masthead__tag">News, filed as it happens.</div>
  </header>`;
}

function renderNav(activeKey){
  const links = SITE_NAV.map(item =>
    `<a href="${item.href}" class="${item.key === activeKey ? 'active' : ''}">${item.label}</a>`
  ).join("");
  return `
  <nav class="nav" aria-label="Primary">
    <div class="wrap nav__inner">${links}</div>
  </nav>`;
}

function renderFooter(){
  return `
  <footer class="site-footer">
    <div class="wrap footer-grid">
      <div>
        <div class="footer-logo">THE SIGNAL<span class="dot">.</span></div>
        <p class="footer-blurb">A student-built news demo created for CIIS 332: Web Application Development. All stories on this site are sample content, not real reporting.</p>
      </div>
      <div>
        <h4>Sections</h4>
        <ul>
          <li><a href="world.html">World</a></li>
          <li><a href="technology.html">Technology</a></li>
          <li><a href="business.html">Business</a></li>
          <li><a href="sports.html">Sports</a></li>
          <li><a href="entertainment.html">Entertainment</a></li>
        </ul>
      </div>
      <div>
        <h4>The Paper</h4>
        <ul>
          <li><a href="about.html">About us</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="index.html">Home</a></li>
        </ul>
      </div>
      <div>
        <h4>Follow</h4>
        <ul>
          <li><a href="#">X / Twitter</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">RSS feed</a></li>
        </ul>
      </div>
    </div>
    <div class="wrap footer-bottom">
      <span>&copy; ${new Date().getFullYear()} The Signal — Coursework Demo</span>
      <span>Built with HTML, CSS &amp; JavaScript</span>
    </div>
  </footer>`;
}

/**
 * Injects the ticker, masthead, nav and footer into placeholder
 * elements every page includes. Called on DOMContentLoaded.
 */
function mountChrome(activeKey){
  const topEl = document.getElementById("site-top");
  const footEl = document.getElementById("site-footer");
  if (topEl){
    topEl.innerHTML = renderTicker() + renderMasthead() + renderNav(activeKey);
  }
  if (footEl){
    footEl.innerHTML = renderFooter();
  }
}

/* ---------- card renderers reused across index/category pages ---------- */

function storyCardHTML(a, { row = false } = {}){
  const cat = CATEGORIES[a.category];
  return `
  <article class="card ${row ? 'card--row' : ''}">
    <a href="article.html?id=${a.id}" class="card__media">
      <img src="${a.image}" alt="Placeholder image for: ${escapeHtml(a.headline)}" loading="lazy">
    </a>
    <div class="card__body">
      <div class="card__cat dot-${a.category}">${cat.label.toUpperCase()}</div>
      <a href="article.html?id=${a.id}"><h3>${escapeHtml(a.headline)}</h3></a>
      <p class="card__dek">${escapeHtml(a.dek)}</p>
      <div class="card__meta">${a.byline} · ${formatDate(a.date)} · ${a.readTime}</div>
    </div>
  </article>`;
}

function sideItemHTML(a, index){
  return `
  <div class="side-item">
    <div class="side-item__num">${String(index).padStart(2,'0')}</div>
    <a href="article.html?id=${a.id}">
      <div class="card__cat dot-${a.category}">${CATEGORIES[a.category].label.toUpperCase()}</div>
      <h3>${escapeHtml(a.headline)}</h3>
    </a>
  </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const activeKey = document.body.dataset.active || "";
  mountChrome(activeKey);
  document.dispatchEvent(new CustomEvent("chrome:ready"));
});
