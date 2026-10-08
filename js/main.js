/* Home page: hero lead story, "more headlines" rail, and one
   preview row per section. */

function renderHome(){
  const featured = getFeatured();
  const lead = featured[0] || getLatest(1)[0];
  const rail = getLatest(5).filter(a => a.id !== lead.id).slice(0, 4);

  const heroEl = document.getElementById("hero");
  if (heroEl){
    const cat = CATEGORIES[lead.category];
    heroEl.innerHTML = `
      <div class="wrap hero__grid">
        <div>
          <div class="hero__media">
            <span class="hero__stamp">FEATURED</span>
            <a href="article.html?id=${lead.id}">
              <img src="${lead.image}" alt="Placeholder image for: ${escapeHtml(lead.headline)}">
            </a>
          </div>
          <div class="eyebrow hero__cat dot-${lead.category}">${cat.label.toUpperCase()}</div>
          <a href="article.html?id=${lead.id}"><h1>${escapeHtml(lead.headline)}</h1></a>
          <p class="hero__dek">${escapeHtml(lead.dek)}</p>
          <div class="hero__meta">${lead.byline} · ${formatDate(lead.date)} · ${lead.readTime}</div>
        </div>
        <aside class="hero__side">
          <div class="hero__side-title">More Headlines</div>
          ${rail.map((a,i) => sideItemHTML(a, i+1)).join("")}
        </aside>
      </div>`;
  }

  const sections = [
    { key: "world", title: "World" },
    { key: "technology", title: "Technology" },
    { key: "business", title: "Business" },
    { key: "sports", title: "Sports" },
    { key: "entertainment", title: "Entertainment" },
  ];

  const sectionsEl = document.getElementById("home-sections");
  if (sectionsEl){
    sectionsEl.innerHTML = sections.map(s => {
      const items = getArticlesByCategory(s.key).slice(0, 3);
      return `
      <section class="section section--rule-top">
        <div class="wrap">
          <div class="section__head">
            <h2>${s.title}</h2>
            <a href="${s.key}.html">All ${s.title} →</a>
          </div>
          <div class="grid">
            ${items.map(a => storyCardHTML(a)).join("")}
          </div>
        </div>
      </section>`;
    }).join("");
  }
}

document.addEventListener("chrome:ready", renderHome);
