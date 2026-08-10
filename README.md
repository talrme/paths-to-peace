# Paths to Peace

**Live site:** https://talrme.github.io/paths-to-peace

A mobile-first static site for tiny meditative practices, collected as paths back toward peace.

The promoted production direction is **Quiet Cards**: an immersive image-backed favorite shuffle with a simple accordion list for browsing every path.

## What It Does

- Opens to a shuffled deck of favorite paths.
- Shows one favorite path at a time with title, description, and image.
- Advances through favorites with the next icon, then reshuffles after the last favorite.
- Supports right and left arrow keys, horizontal phone swipes, and a subtle previous icon in the shuffle view.
- Can shuffle favorites only or all paths from Settings.
- Includes a `List` view grouped into favorites, other paths, and energy-giving paths.
- Uses accordion rows with one-open or many-open behavior from Settings.
- Uses soft accordion and shuffle transitions, with a still-motion option in Settings.
- Includes a small settings modal for start view, color scheme, shuffle pool, accordion behavior, and motion.
- Saves settings on the current computer or phone with browser `localStorage`.
- Mirrors non-default settings in URL parameters for shareable views.
- Includes reset controls in the title and Settings panel to return to defaults.

## Run Locally

No build step is required. Open:

```text
index.html
```

Or serve the folder:

```bash
cd paths-to-peace
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Project Layout

| Path | Purpose |
|------|---------|
| `index.html` | Production page shell |
| `styles.css` | Quiet Cards layout, responsive styling, modal styling |
| `app.js` | Path data, shuffle deck, list rendering, settings |
| `site.webmanifest` | Saved-to-phone app metadata and icon references |
| `images/` | Local image assets |
| `README.md` | Human-facing overview and live-site link |
| `AI_README.md` | Context for coding assistants and future edits |

## Icons

The browser tab icon and phone home-screen icons are generated from `images/dove.png`. `index.html` links `images/favicon-32.png` for tabs and `images/apple-touch-icon.png` for iOS, while `site.webmanifest` points Android/PWA installs to the 192px and 512px icon files. `images/dove-title.png` is a transparent title mark used inside the page heading.

## Content

Path data lives in `app.js`. Set `favorite: true` for any path that should appear in the default shuffle, and use `category: "energy"` for paths that belong in the Energy Giving section.

## Settings URLs

Non-default settings appear as URL parameters: `view`, `scheme`, `pool`, `accordions`, and `motion`. URL values override saved device settings on load. Clicking the title or `Back to Default` clears saved settings and URL parameters.
