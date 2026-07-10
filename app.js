const PATHS = [
  {
    "title": "Letting Go of a Story",
    "duration": "5 min",
    "favorite": true,
    "category": "favorite",
    "image": "waterfalls-and-northern-lights.jpeg",
    "alt": "Waterfalls under northern lights",
    "description": "Spend a moment identifying a story you are believing. If nothing obvious appears, you can use the simple story that something could be better right now. Then gently ask what it feels like to not believe that story, even for a breath, and notice what emerges in your body, feelings, and next thoughts."
  },
  {
    "title": "Five Deep Breaths",
    "duration": "2 min",
    "favorite": true,
    "category": "favorite",
    "image": "meditation.jpg",
    "alt": "A calm seated meditation figure",
    "description": "Take five deep breaths and make breathing the only thing you are doing. If you get lost in thought on breath two or three, simply start over and try for five in a row. As a bonus, notice how things felt before and how they feel after."
  },
  {
    "title": "Release the Back of the Neck",
    "duration": "3 min",
    "favorite": true,
    "category": "favorite",
    "image": "rocks.jpg",
    "alt": "Smooth stones stacked beside water",
    "description": "Bring your attention to the back of your neck, where the head and body meet. Breathe into that connection and let it soften. If it is available, invite the energy of the heart and body to meet the energy of the head, so the head is welcomed into the body rather than floating apart from it."
  },
  {
    "title": "Body Scan",
    "duration": "10 min",
    "favorite": true,
    "category": "favorite",
    "image": "mountains.webp",
    "alt": "Mountains rising into a soft sky",
    "description": "Move slowly through the body, part by part, and let each area be noticed before it has to change. Relax what can relax. Feel what can be felt. Let awareness travel from head to feet or feet to head at whatever pace feels kind."
  },
  {
    "title": "Presence Practice with Others",
    "duration": "8 min",
    "favorite": true,
    "category": "favorite",
    "image": "ocean.avif",
    "alt": "Ocean water with soft light",
    "description": "Practice somatic awareness while being with other people. Notice something alive in your body, then listen as someone else shares. If they name a part of their body or a felt sense, gently feel into that same place in your own body while staying present with them."
  },
  {
    "title": "Name Five Things",
    "duration": "2 min",
    "favorite": false,
    "category": "other",
    "image": "mountains.webp",
    "alt": "Layered mountains and sky",
    "description": "Name five things you can notice right now. They can be things you see, feel, hear, or smell. Let each one be simple and specific, just enough to bring you back into the room and into your body."
  },
  {
    "title": "Shape and Color of Two Feelings",
    "duration": "4 min",
    "favorite": false,
    "category": "other",
    "image": "ocean.avif",
    "alt": "Ocean water with soft light",
    "description": "Think of two feelings that are present right now. For each one, notice if it has a shape and a color. Once both are identified, sit with them for a bit, feeling and seeing both at the same time without needing either one to disappear."
  },
  {
    "title": "Get Lost in a Project",
    "duration": "20 min",
    "favorite": false,
    "category": "energy",
    "image": "mountains.webp",
    "alt": "Mountains rising into a soft sky",
    "description": "Pick a project with enough texture to absorb you and give it a real pocket of attention. Let momentum build without checking whether it is useful every few minutes. The path is the feeling of getting interested enough to disappear into the work."
  },
  {
    "title": "Stare at Mary's Face",
    "duration": "2 min",
    "favorite": false,
    "category": "energy",
    "image": "meditation.jpg",
    "alt": "A calm seated meditation figure",
    "description": "Look at Mary's face and let delight be uncomplicated. Notice the tiny expressions, the softness, the humor, the particular aliveness of someone you love. Let attention become a kind of devotion."
  },
  {
    "title": "Keep the Joke Going",
    "duration": "5 min",
    "favorite": false,
    "category": "energy",
    "image": "waterfalls.jpg",
    "alt": "A bright waterfall flowing through green rock",
    "description": "Riff on imaginary situations with friends and let the bit keep unfolding. Add details, heighten the premise, pass it back and forth, and follow the laughter as a real source of energy."
  }
];
const STORAGE_KEY = "paths-to-peace-settings-v1";
const PALETTE_LABELS = {
  fern: "Fern",
  tide: "Tide",
  sunrise: "Sunrise",
  lantern: "Lantern",
  bloom: "Bloom",
};
const DEFAULT_SETTINGS = {
  startView: "shuffle",
  colorScheme: "fern",
  shufflePool: "favorites",
  accordionMode: "single",
  motion: "soft",
};
const SETTING_PARAMS = {
  startView: "view",
  colorScheme: "scheme",
  shufflePool: "pool",
  accordionMode: "accordions",
  motion: "motion",
};
const SETTING_VALUES = {
  startView: ["shuffle", "list"],
  colorScheme: Object.keys(PALETTE_LABELS),
  shufflePool: ["favorites", "all"],
  accordionMode: ["single", "many"],
  motion: ["soft", "still"],
};
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const SHUFFLE_FADE_OUT_MS = 240;
const SHUFFLE_FADE_IN_MS = 620;
const ACCORDION_TRANSITION_MS = 460;

const state = {
  deck: [],
  deckIndex: 0,
  view: "shuffle",
  settings: loadSettings(),
  shuffleTransitionToken: 0,
};

const els = {
  views: Array.from(document.querySelectorAll("[data-view]")),
  shuffleView: document.querySelector("[data-view='shuffle']"),
  viewButtons: Array.from(document.querySelectorAll("[data-view-button]")),
  currentImage: document.querySelector("[data-current-image]"),
  currentTitle: document.querySelector("[data-current-title]"),
  currentDescription: document.querySelector("[data-current-description]"),
  nextButton: document.querySelector("[data-next-path]"),
  pathList: document.querySelector("[data-path-list]"),
  openSettings: document.querySelector("[data-open-settings]"),
  closeSettings: document.querySelector("[data-close-settings]"),
  settingsBackdrop: document.querySelector("[data-settings-backdrop]"),
  settingsModal: document.querySelector("[data-settings-modal]"),
  settingsButtons: Array.from(document.querySelectorAll("[data-setting-key]")),
  paletteLabel: document.querySelector("[data-current-palette]"),
  resetSettings: document.querySelector("[data-reset-settings]"),
  resetHome: document.querySelector("[data-reset-home]"),
};

function loadSettings() {
  let savedSettings = {};
  try {
    savedSettings = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch (error) {
    savedSettings = {};
  }
  return { ...DEFAULT_SETTINGS, ...savedSettings, ...readSettingsFromUrl() };
}

function saveSettings() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.settings));
  } catch (error) {
    // Settings remain usable for the current page load if browser storage is unavailable.
  }
}

function clearSavedSettings() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    // Settings can still reset for the current page load if browser storage is unavailable.
  }
}

function readSettingsFromUrl() {
  const urlSettings = {};
  try {
    const params = new URLSearchParams(window.location.search);
    Object.entries(SETTING_PARAMS).forEach(([settingKey, paramKey]) => {
      const value = params.get(paramKey);
      if (value && SETTING_VALUES[settingKey].includes(value)) {
        urlSettings[settingKey] = value;
      }
    });
  } catch (error) {
    return {};
  }
  return urlSettings;
}

function writeSettingsToUrl() {
  try {
    const url = new URL(window.location.href);
    Object.entries(SETTING_PARAMS).forEach(([settingKey, paramKey]) => {
      if (state.settings[settingKey] === DEFAULT_SETTINGS[settingKey]) {
        url.searchParams.delete(paramKey);
      } else {
        url.searchParams.set(paramKey, state.settings[settingKey]);
      }
    });
    window.history.replaceState({}, "", url);
  } catch (error) {
    // URL syncing is a convenience; settings still work without History support.
  }
}

function clearUrlParameters() {
  try {
    const url = new URL(window.location.href);
    url.search = "";
    window.history.replaceState({}, "", url);
  } catch (error) {
    // Reset still works even when the URL cannot be rewritten.
  }
}

function shuffle(items) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function shufflePaths() {
  if (state.settings.shufflePool === "all") {
    return PATHS;
  }
  return PATHS.filter((path) => path.favorite);
}

function refreshDeck() {
  state.deck = shuffle(shufflePaths());
  state.deckIndex = 0;
}

function currentPath() {
  if (!state.deck.length) {
    refreshDeck();
  }
  return state.deck[state.deckIndex];
}

function shouldAnimate() {
  return state.settings.motion !== "still" &&
    !(window.matchMedia && window.matchMedia(REDUCED_MOTION_QUERY).matches);
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function preloadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = src;
    if (image.decode) {
      image.decode().then(resolve).catch(resolve);
      return;
    }
    image.onload = resolve;
    image.onerror = resolve;
  });
}

function setCurrentPathContent(path, imageSrc = `images/${path.image}`) {
  els.currentImage.src = imageSrc;
  els.currentImage.alt = path.alt;
  els.currentTitle.textContent = path.title;
  els.currentDescription.textContent = path.description;
}

async function renderCurrentPath({ animate = false } = {}) {
  const path = currentPath();
  const imageSrc = `images/${path.image}`;

  if (!animate || !shouldAnimate()) {
    state.shuffleTransitionToken += 1;
    els.shuffleView.classList.remove("is-fading-out", "is-fading-in");
    els.nextButton.disabled = false;
    setCurrentPathContent(path, imageSrc);
    return;
  }

  const token = state.shuffleTransitionToken + 1;
  state.shuffleTransitionToken = token;
  els.nextButton.disabled = true;
  els.shuffleView.classList.remove("is-fading-in");
  els.shuffleView.classList.add("is-fading-out");

  await Promise.all([wait(SHUFFLE_FADE_OUT_MS), preloadImage(imageSrc)]);
  if (token !== state.shuffleTransitionToken) {
    return;
  }

  setCurrentPathContent(path, imageSrc);
  els.shuffleView.classList.remove("is-fading-out");
  els.shuffleView.classList.add("is-fading-in");

  await wait(SHUFFLE_FADE_IN_MS);
  if (token !== state.shuffleTransitionToken) {
    return;
  }

  els.shuffleView.classList.remove("is-fading-in");
  els.nextButton.disabled = false;
}

function showNextPath() {
  state.deckIndex += 1;
  if (state.deckIndex >= state.deck.length) {
    refreshDeck();
  }
  renderCurrentPath({ animate: true });
}

function setView(view) {
  state.view = view;
  els.views.forEach((section) => {
    section.hidden = section.dataset.view !== view;
  });
  els.viewButtons.forEach((button) => {
    const active = button.dataset.viewButton === view;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function createSectionLabel(text) {
  const label = document.createElement("p");
  label.className = "list-section-label";
  label.textContent = text;
  return label;
}

function applySettings() {
  document.documentElement.dataset.motion = state.settings.motion;
  document.body.dataset.scheme = state.settings.colorScheme;
  if (els.paletteLabel) {
    els.paletteLabel.textContent = PALETTE_LABELS[state.settings.colorScheme] || PALETTE_LABELS.fern;
  }
  els.settingsButtons.forEach((button) => {
    const isPressed = state.settings[button.dataset.settingKey] === button.dataset.settingValue;
    button.setAttribute("aria-pressed", String(isPressed));
  });
}

function setSetting(key, value) {
  state.settings[key] = value;
  saveSettings();
  writeSettingsToUrl();
  applySettings();
  if (key === "startView") {
    setView(value);
  }
  if (key === "shufflePool") {
    refreshDeck();
    renderCurrentPath({ animate: state.view === "shuffle" });
  }
}

function resetToDefaults() {
  state.settings = { ...DEFAULT_SETTINGS };
  clearSavedSettings();
  clearUrlParameters();
  applySettings();
  refreshDeck();
  renderCurrentPath({ animate: state.view === "shuffle" });
  setView(DEFAULT_SETTINGS.startView);
  renderList();
}

function openSettings() {
  els.settingsBackdrop.hidden = false;
  els.settingsModal.hidden = false;
  document.body.classList.add("is-modal-open");
  els.closeSettings.focus();
}

function closeSettings() {
  els.settingsBackdrop.hidden = true;
  els.settingsModal.hidden = true;
  document.body.classList.remove("is-modal-open");
  els.openSettings.focus();
}

function clearAccordionStyles(body) {
  body.style.height = "";
  body.style.opacity = "";
  body.style.transform = "";
}

function waitForTransition(element, propertyName, fallbackMs, callback) {
  let isSettled = false;
  const done = (event) => {
    if (isSettled) {
      return;
    }
    if (event && event.target !== element) {
      return;
    }
    if (event && propertyName && event.propertyName !== propertyName) {
      return;
    }
    isSettled = true;
    window.clearTimeout(timer);
    element.removeEventListener("transitionend", done);
    callback();
  };
  const timer = window.setTimeout(done, fallbackMs);
  element.addEventListener("transitionend", done);
}

function openPathItem(details) {
  if (details.open || details.dataset.animating === "true") {
    return;
  }
  const body = details.querySelector(".path-body");
  if (!body || !shouldAnimate()) {
    details.open = true;
    return;
  }

  details.dataset.animating = "true";
  details.open = true;
  body.style.height = "0px";
  body.style.opacity = "0";
  body.style.transform = "translateY(-0.35rem)";

  window.requestAnimationFrame(() => {
    body.style.height = `${body.scrollHeight}px`;
    body.style.opacity = "1";
    body.style.transform = "translateY(0)";
  });

  waitForTransition(body, "height", ACCORDION_TRANSITION_MS + 120, () => {
    clearAccordionStyles(body);
    delete details.dataset.animating;
  });
}

function closePathItem(details) {
  if (!details.open || details.dataset.animating === "true") {
    return;
  }
  const body = details.querySelector(".path-body");
  if (!body || !shouldAnimate()) {
    details.open = false;
    return;
  }

  details.dataset.animating = "true";
  details.classList.add("is-closing");
  body.style.height = `${body.scrollHeight}px`;
  body.style.opacity = "1";
  body.style.transform = "translateY(0)";

  window.requestAnimationFrame(() => {
    body.style.height = "0px";
    body.style.opacity = "0";
    body.style.transform = "translateY(-0.3rem)";
  });

  waitForTransition(body, "height", ACCORDION_TRANSITION_MS + 120, () => {
    details.open = false;
    details.classList.remove("is-closing");
    clearAccordionStyles(body);
    delete details.dataset.animating;
  });
}

function togglePathItem(details) {
  if (details.dataset.animating === "true") {
    return;
  }
  if (details.open) {
    closePathItem(details);
    return;
  }
  if (state.settings.accordionMode === "single") {
    document.querySelectorAll(".path-item[open]").forEach((item) => {
      if (item !== details) {
        closePathItem(item);
      }
    });
  }
  openPathItem(details);
}

function createPathItem(path, index) {
  const details = document.createElement("details");
  details.className = path.favorite ? "path-item is-favorite" : "path-item";
  if (index === 0) {
    details.open = true;
  }

  const summary = document.createElement("summary");
  const title = document.createElement("span");
  title.className = "summary-title";
  title.textContent = path.title;
  summary.append(title);
  summary.addEventListener("click", (event) => {
    event.preventDefault();
    togglePathItem(details);
  });

  const body = document.createElement("div");
  body.className = "path-body";
  const image = document.createElement("img");
  image.src = `images/${path.image}`;
  image.alt = path.alt;
  const copy = document.createElement("p");
  copy.textContent = path.description;
  body.append(image, copy);

  details.append(summary, body);

  return details;
}

function renderList() {
  const favorites = PATHS.filter((path) => path.favorite);
  const others = PATHS.filter((path) => !path.favorite && path.category !== "energy");
  const energyGiving = PATHS.filter((path) => path.category === "energy");
  const fragment = document.createDocumentFragment();
  fragment.append(createSectionLabel("Favorites"));
  favorites.forEach((path, index) => {
    fragment.append(createPathItem(path, index));
  });
  if (others.length) {
    fragment.append(createSectionLabel("Other"));
    others.forEach((path, index) => {
      fragment.append(createPathItem(path, favorites.length + index));
    });
  }
  if (energyGiving.length) {
    fragment.append(createSectionLabel("Energy Giving"));
    energyGiving.forEach((path, index) => {
      fragment.append(createPathItem(path, favorites.length + others.length + index));
    });
  }
  els.pathList.replaceChildren(fragment);
}

els.nextButton.addEventListener("click", showNextPath);
els.viewButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.viewButton));
});
els.openSettings.addEventListener("click", openSettings);
els.closeSettings.addEventListener("click", closeSettings);
els.settingsBackdrop.addEventListener("click", closeSettings);
els.resetSettings.addEventListener("click", resetToDefaults);
els.resetHome.addEventListener("click", resetToDefaults);
els.resetHome.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    resetToDefaults();
  }
});
els.settingsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setSetting(button.dataset.settingKey, button.dataset.settingValue);
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !els.settingsModal.hidden) {
    closeSettings();
  }
});

refreshDeck();
renderCurrentPath();
renderList();
applySettings();
setView(state.settings.startView);
writeSettingsToUrl();
