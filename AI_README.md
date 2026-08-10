# AI_README - Paths to Peace

Context for humans and coding assistants continuing this project. The user-facing overview is in `README.md`.

## What this is

- Static no-build website: plain `index.html`, `styles.css`, and `app.js`.
- Production direction: **Quiet Cards**, promoted from the original `staging_1_quiet_cards` prototype.
- Live site is listed in `README.md`.
- Product idea: a phone-first collection of meditative "paths to peace" with a favorite shuffle view and an accordion list view.

## Behavior contract

- Default view is `Shuffle`.
- Shuffle includes only paths where `favorite: true` unless Settings -> Shuffle pool is set to `all`.
- The `Next` button walks through a shuffled favorite deck and reshuffles after the last favorite.
- The shuffle view supports right and left arrow keys, horizontal touch swipes, and a subtle previous icon.
- `List` renders grouped sections: `Favorites`, `Other`, and `Energy Giving`.
- Accordion rows include title, description, and image.
- Accordions use JS-assisted height transitions so both opening and closing animate smoothly.
- Shuffle advances use a preloaded fade/soft-focus transition.
- Settings modal includes:
  - `startView`: `shuffle` or `list`
  - `colorScheme`: `fern`, `tide`, `sunrise`, `lantern`, or `bloom`
  - `shufflePool`: `favorites` or `all`
  - `accordionMode`: `single` or `many`
  - `motion`: `soft` or `still`; `still` disables the shuffle and accordion transitions
- Settings persist per browser/device in `localStorage` key `paths-to-peace-settings-v1`.
- Non-default settings are mirrored in URL params: `view`, `scheme`, `pool`, `accordions`, and `motion`.
- URL params override saved device settings on load.
- Clicking the title or the Settings `Back to Default` button resets to defaults, clears saved settings, and removes URL params.

## Code style

- Use vanilla JavaScript. No npm, bundler, external CDN, or framework unless the user asks for one.
- Keep the project static and directly openable in a browser.
- Keep data in `app.js` unless the content grows enough to justify a separate JSON file.
- Match the local Websites for Fun style: root docs, static files, mobile-first layout, settings modal, click-outside close, Escape close, and an X close button that rotates on hover.
- Avoid adding extra instructions inside the UI. Controls should be self-explanatory.

## Content notes

Current image assets:

- `mountains.webp`
- `waterfalls-and-northern-lights.jpeg`
- `ocean.avif`
- `meditation.jpg`
- `rocks.jpg`
- `waterfalls.jpg`
- `dove.png` source image for site icons
- `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`, and `icon-512.png` generated from the dove image
- `dove-title.png` transparent dove mark used in the `h1` title

Current path content is edited directly in `app.js`. Keep favorites intentional; they define the default shuffle deck. Use `category: "other"` for ordinary non-favorites and `category: "energy"` for Energy Giving entries.

## Future edits

- Update `README.md` and this file together when user-visible behavior changes.
- If adding more visual directions later, create new staging folders again rather than changing production in place without a comparison path.
