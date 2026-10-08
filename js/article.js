/* Article page: reads ?id= from the URL and renders the
   matching story, plus a small related-stories rail. */

function getParam(name){
  return new URLSearchParams(window.location.search).get(name);
}

function renderArticle(){
  const id = getParam("id");
  const article = id ? getArticleById(id) : null;
  const root = document.getElementById("article-root");
  if (!root) return;

  if (!article){
    root.innerHTML = `
      <div class="error-page">
        <div class="code">404</div>
        <h1>Story not found</h1>
        <p>We couldn't find that story. It may have been moved, or the link is out of date.</p>
        <a class="btn" href="index.html">Back to the front page</a>
      </div>`;
    document.title = "Story not found — The Signal";
    return;
  }

  const cat = CATEGORIES[article.category];
  document.title = `${article.headline} — The Signal`;

  const related = getRelated(article, 3);

  root.innerHTML = `
    <div class="article-head wrap">
      <a class="eyebrow dot-${article.category}" href="${article.category}.html">${cat.label.toUpperCase()}</a>
      <h1>${escapeHtml(article.headline)}</h1>
      <p class="dek">${escapeHtml(article.dek)}</p>
      <div class="byline-row">
        <span>By ${article.byline}</span>
        <span>${formatDate(article.date)} · ${article.readTime}</span>
      </div>
    </div>

    <figure class="article-media wrap">
      <img src="${article.image}" alt="Placeholder image for: ${escapeHtml(article.headline)}">
      <figcaption>Placeholder image — swap in your own photo before publishing. Caption: ${escapeHtml(article.dek)}</figcaption>
    </figure>

    <div class="article-body wrap">
      ${article.body.map(p => `<p>${escapeHtml(p)}</p>`).join("")}

      <div class="tag-row">
        ${article.tags.map(t => `<span class="tag">#${escapeHtml(t)}</span>`).join("")}
      </div>

      <div class="share-row">
        <span class="eyebrow">Share:</span>
        <button type="button" onclick="alert('Sharing is a placeholder in this demo build.')">Copy link</button>
        <button type="button" onclick="alert('Sharing is a placeholder in this demo build.')">X / Twitter</button>
      </div>
    </div>

    ${related.length ? `
    <section class="related wrap section--rule-top section">
      <div class="section__head">
        <h2>More in ${cat.label}</h2>
        <a href="${article.category}.html">All ${cat.label} →</a>
      </div>
      <div class="grid">
        ${related.map(a => storyCardHTML(a)).join("")}
      </div>
    </section>` : ""}
  `;
}

document.addEventListener("chrome:ready", renderArticle);
