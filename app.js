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
    "title": "Look for Moving Water",
    "duration": "3 min",
    "favorite": false,
    "category": "other",
    "image": "waterfalls.jpg",
    "alt": "A bright waterfall flowing through green rock",
    "description": "Watch water move in any form: a video, a sink, rain, the ocean. Let your eyes follow one current until your shoulders remember gravity."
  },
  {
    "title": "Walk Without a Destination",
    "duration": "10 min",
    "favorite": false,
    "category": "other",
    "image": "mountains.webp",
    "alt": "Mountains rising into a soft sky",
    "description": "Step outside and walk without solving anything. Turn when your body wants to turn. Notice one color, one sound, and one place where the air changes."
  },
  {
    "title": "Stone in Hand",
    "duration": "2 min",
    "favorite": false,
    "category": "other",
    "image": "rocks.jpg",
    "alt": "Smooth stones stacked beside water",
    "description": "Hold a stone, mug, ring, or key. Feel its temperature and edges. Give your attention to weight instead of worry for one quiet minute."
  },
  {
    "title": "Open the Window",
    "duration": "4 min",
    "favorite": false,
    "category": "other",
    "image": "ocean.avif",
    "alt": "Ocean water with soft light",
    "description": "Open a window or stand near one. Let the room trade air with the world. Name what is different after the first full breath."
  },
  {
    "title": "Tea Without Multitasking",
    "duration": "7 min",
    "favorite": false,
    "category": "other",
    "image": "waterfalls-and-northern-lights.jpeg",
    "alt": "Waterfalls under northern lights",
    "description": "Make tea, coffee, or water as if the whole ceremony matters. Stay with the cup until the first three sips are finished."
  },
  {
    "title": "Name Five Colors",
    "duration": "2 min",
    "favorite": false,
    "category": "other",
    "image": "mountains.webp",
    "alt": "Layered mountains and sky",
    "description": "Find five colors in the room. Give each one a precise name: not blue, but denim blue; not green, but basil green."
  },
  {
    "title": "One Honest Sentence",
    "duration": "3 min",
    "favorite": false,
    "category": "other",
    "image": "meditation.jpg",
    "alt": "Meditation art on a simple background",
    "description": "Write one sentence that is true right now. It can be tiny. It can contradict yesterday. Let it stand without fixing it."
  },
  {
    "title": "Listen to One Song",
    "duration": "5 min",
    "favorite": false,
    "category": "other",
    "image": "waterfalls.jpg",
    "alt": "Water spilling over stones",
    "description": "Choose one song and do nothing else until it ends. Let the first sound and the last sound have their own space."
  },
  {
    "title": "Sky Check",
    "duration": "2 min",
    "favorite": false,
    "category": "other",
    "image": "waterfalls-and-northern-lights.jpeg",
    "alt": "A luminous night sky over falling water",
    "description": "Look at the sky for two minutes. If you cannot see it, imagine the weather above the ceiling continuing without your supervision."
  },
  {
    "title": "Tidy One Surface",
    "duration": "6 min",
    "favorite": false,
    "category": "other",
    "image": "rocks.jpg",
    "alt": "Balanced stones in a quiet scene",
    "description": "Clear one small surface: a desk corner, a sink edge, one square foot of floor. Stop when that surface can breathe."
  },
  {
    "title": "Hand on Heart",
    "duration": "1 min",
    "favorite": false,
    "category": "other",
    "image": "ocean.avif",
    "alt": "A peaceful ocean surface",
    "description": "Put one hand on your chest and one hand on your belly. Let your hands be proof that you are here, even before anything is resolved."
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

const state = {
  deck: [],
  deckIndex: 0,
  view: "shuffle",
  settings: loadSettings(),
};

const els = {
  views: Array.from(document.querySelectorAll("[data-view]")),
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
};

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return { ...DEFAULT_SETTINGS, ...saved };
  } catch (error) {
    return { ...DEFAULT_SETTINGS };
  }
}

function saveSettings() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.settings));
  } catch (error) {
    // Settings remain usable for the current page load if browser storage is unavailable.
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

function renderCurrentPath() {
  const path = currentPath();
  els.currentImage.src = `images/${path.image}`;
  els.currentImage.alt = path.alt;
  els.currentTitle.textContent = path.title;
  els.currentDescription.textContent = path.description;
}

function showNextPath() {
  state.deckIndex += 1;
  if (state.deckIndex >= state.deck.length) {
    refreshDeck();
  }
  renderCurrentPath();
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
  applySettings();
  if (key === "startView") {
    setView(value);
  }
  if (key === "shufflePool") {
    refreshDeck();
    renderCurrentPath();
  }
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

function createPathItem(path, index) {
  const details = document.createElement("details");
  details.className = path.favorite ? "path-item is-favorite" : "path-item";
  details.name = "paths-to-peace";
  if (index === 0) {
    details.open = true;
  }

  const summary = document.createElement("summary");
  const title = document.createElement("span");
  title.className = "summary-title";
  title.textContent = path.title;
  summary.append(title);

  const body = document.createElement("div");
  body.className = "path-body";
  const image = document.createElement("img");
  image.src = `images/${path.image}`;
  image.alt = path.alt;
  const copy = document.createElement("p");
  copy.textContent = path.description;
  body.append(image, copy);

  details.append(summary, body);
  details.addEventListener("toggle", () => {
    if (!details.open || state.settings.accordionMode !== "single") {
      return;
    }
    document.querySelectorAll(".path-item[open]").forEach((item) => {
      if (item !== details) {
        item.removeAttribute("open");
      }
    });
  });

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
