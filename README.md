# The Signal — Sample News Website

A multi-page news website built with plain **HTML, CSS, and JavaScript** (no frameworks, no WYSIWYG editors) for CIIS 332: Web Application Development.

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Featured story, headline rail, per-section previews |
| Article | `article.html?id=...` | Full story template, loads content dynamically |
| World | `world.html` | World news section |
| Technology | `technology.html` | Technology news section |
| Business | `business.html` | Business news section |
| Sports | `sports.html` | Sports news section |
| Entertainment | `entertainment.html` | Entertainment news section |
| About | `about.html` | About the (fictional) newsroom |
| Contact | `contact.html` | Contact form with client-side validation |
| 404 | `404.html` | Not-found page |

That's 9 interconnected pages, all linked from the shared navigation and footer.

## How it's built

- `css/style.css` — the whole design system (colors, type, layout).
- `js/data.js` — all sample story content lives here as one array. Every page reads from it.
- `js/common.js` — injects the shared ticker, masthead, nav, and footer into every page, plus card-rendering helpers.
- `js/main.js`, `js/category.js`, `js/article.js`, `js/contact.js` — page-specific rendering logic.
- `images/*.svg` — labeled placeholder images. Replace these with real photos before submitting/publishing; keep the same filenames or update the paths in `data.js`.

All story content is original sample copy written for this demo — not copied from real news outlets.

## Replacing placeholder images

Every image in `/images` is an SVG with a visible "PLACEHOLDER IMAGE" label and its target dimensions (e.g. `1200×675`). To swap one in:

1. Save your real photo with the same filename (e.g. `world-01.jpg`) or a new name.
2. If you rename it, update the matching `image:` path in `js/data.js`.
3. Keep roughly the same aspect ratio so cards and the hero don't distort.

## Hosting on GitHub Pages

1. Create a new repository on [github.com](https://github.com), e.g. `the-signal`.
2. Upload all files in this folder, keeping the folder structure (`css/`, `js/`, `images/` as subfolders).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then **Save**.
6. Wait a minute or two, then visit the URL GitHub gives you (usually `https://<your-username>.github.io/the-signal/`).

## Running it locally first

Because the pages load data via JavaScript, opening `index.html` directly in a browser works fine for this project (no server required) — just double-click any `.html` file. If your browser blocks local scripts, you can also run a tiny local server from this folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
