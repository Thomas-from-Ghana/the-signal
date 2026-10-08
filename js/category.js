/* Category page: reads data-category off <body>, renders the
   banner and the full list of stories for that section. */

function renderCategory(){
  const key = document.body.dataset.category;
  const cat = CATEGORIES[key];
  if (!cat) return;

  const bannerEl = document.getElementById("cat-banner");
  if (bannerEl){
    bannerEl.innerHTML = `
      <img src="images/banner-${key}.jpeg" alt="Placeholder banner image for the ${cat.label} section">
      <div class="cat-banner__label">
        <span class="eyebrow">Section</span>
        <h1>${cat.label}</h1>
      </div>`;
  }

  const items = getArticlesByCategory(key);
  const listEl = document.getElementById("cat-list");
  if (listEl){
    if (items.length === 0){
      listEl.innerHTML = `<p>No stories filed in this section yet. Check back soon.</p>`;
    } else {
      const [first, ...rest] = items;
      listEl.innerHTML = `
        <div class="grid">
          ${storyCardHTML(first)}
          ${rest.map(a => storyCardHTML(a)).join("")}
        </div>`;
    }
  }

  const countEl = document.getElementById("cat-count");
  if (countEl){
    countEl.textContent = `${items.length} ${items.length === 1 ? 'story' : 'stories'} filed`;
  }
}

document.addEventListener("chrome:ready", renderCategory);
