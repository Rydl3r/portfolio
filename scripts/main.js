// All page content lives in index.html. This file only adds the optional,
// interactive extras: the motion toggle, the visitor counter, the guestbook,
// the dates, the fortune cookie, the tab-title trick, the cheat code and the
// sparkle trail. The music player lives in scripts/midi-player.js.
// Without JavaScript the page still shows everything.

const MOTION_KEY = "ivan-motion-paused";
const VISITS_KEY = "ivan-visits";
const GUESTBOOK_KEY = "ivan-guestbook";
const STARTING_VISITS = 5500;
const MAX_GUESTBOOK_ENTRIES = 20;
const SPARKLE_SYMBOLS = ["✦", "★", "✧", "·"];

// ---------- Helpers ----------

function escapeHtml(text) {
  const replacements = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
  return text.replace(/[&<>"]/g, (char) => replacements[char]);
}

// localStorage can throw (private mode, blocked storage), so wrap every access.
function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage unavailable: the feature just won't persist.
  }
}

// ---------- Motion toggle ----------
// Blinking and scrolling text must be stoppable (WCAG 2.2.2), so this
// button freezes every animation and remembers the choice.

function isMotionPaused() {
  return document.documentElement.classList.contains("motion-paused");
}

function setupMotionToggle() {
  const button = document.getElementById("motion-toggle");

  function apply(paused) {
    document.documentElement.classList.toggle("motion-paused", paused);
    button.setAttribute("aria-pressed", String(paused));
    button.textContent = paused ? "[ RESUME THE MADNESS ]" : "[ STOP THE MADNESS ]";
  }

  const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saved = readStorage(MOTION_KEY, null);
  apply(saved === null ? prefersReducedMotion : saved === "true");

  button.addEventListener("click", () => {
    const paused = !isMotionPaused();
    apply(paused);
    writeStorage(MOTION_KEY, String(paused));
  });
}

// ---------- Visitor counter (counts visits in this browser only) ----------

function setupVisitorCounter() {
  const counter = document.getElementById("counter");
  const visits = Number(readStorage(VISITS_KEY, STARTING_VISITS)) + 1;
  writeStorage(VISITS_KEY, visits);

  const digits = String(visits).padStart(7, "0").split("");
  counter.innerHTML = digits.map((digit) => `<span aria-hidden="true">${digit}</span>`).join("");
  counter.setAttribute("aria-label", `You are visitor number ${visits}`);
}

// ---------- Guestbook (entries are saved in this browser only) ----------
// The joke entries are written in index.html; visitors' own entries go above them.

function setupGuestbook() {
  const form = document.getElementById("guestbook-form");
  const nameInput = document.getElementById("guestbook-name");
  const messageInput = document.getElementById("guestbook-message");
  const list = document.getElementById("guestbook-entries");

  let entries = [];
  try {
    entries = JSON.parse(readStorage(GUESTBOOK_KEY, "[]"));
  } catch {
    entries = [];
  }

  function addToPage(entry) {
    const item = document.createElement("li");
    item.className = "entry";
    item.innerHTML = `<b>${escapeHtml(entry.name)}</b> wrote: ${escapeHtml(entry.message)}`;
    list.prepend(item);
  }

  // Oldest first, so the newest ends up on top.
  entries.slice().reverse().forEach(addToPage);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const entry = { name: nameInput.value.trim(), message: messageInput.value.trim() };
    entries = [entry, ...entries].slice(0, MAX_GUESTBOOK_ENTRIES);
    writeStorage(GUESTBOOK_KEY, JSON.stringify(entries));
    addToPage(entry);

    nameInput.value = "";
    messageInput.value = "";
  });
}

// ---------- Dates ----------
// index.html has fixed fallback dates; this keeps them current.
// ("Last updated: today" is part of the 1999 joke.)

function updateDates() {
  const now = new Date();
  const lastUpdated = document.getElementById("last-updated");

  document.getElementById("current-year").textContent = now.getFullYear();
  lastUpdated.textContent = now.toLocaleDateString("en-US");
  lastUpdated.setAttribute("datetime", now.toISOString().slice(0, 10));
}

// ---------- Fortune cookie ----------
// index.html shows the first fortune; the button cracks a new one.

const FORTUNES = [
  "Today's lucky z-index: 9999.",
  "You will find the bug. It will be a missing semicolon.",
  "A merge conflict is in your future. Stay calm.",
  "The cache is lying to you. Hard refresh.",
  "It works on your machine. Ship your machine.",
  "You will center a div on the first try. (Just kidding.)",
  "Your next npm install will download half the internet.",
  "Naming things is hard. You will call it thing2 and regret it.",
  "0.1 + 0.2 will still not equal 0.3. Make peace with it.",
  "The bug is not in the framework. (It's in the framework.)",
  "A wild console.log appears in production.",
  "Someone will ask you to make the logo bigger.",
  "You will close 47 browser tabs and feel nothing.",
  "Friday deploys bring great adventure.",
];

function setupFortuneCookie() {
  const text = document.getElementById("fortune-text");
  const button = document.getElementById("fortune-button");
  let index = 0;

  button.addEventListener("click", () => {
    // Step by a random amount so it never repeats the current one
    index = (index + 1 + Math.floor(Math.random() * (FORTUNES.length - 1))) % FORTUNES.length;
    text.textContent = FORTUNES[index];
  });
}

// ---------- Tab title trick ----------

function setupTabTitle() {
  const original = document.title;
  document.addEventListener("visibilitychange", () => {
    document.title = document.hidden ? "👀 come back!! the page misses you" : original;
  });
}

// ---------- Cheat code ----------
// The Konami code (↑↑↓↓←→←→BA) or tapping the sidebar floppy 5 times.

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

function setupCheatCode() {
  const toast = document.getElementById("cheat-toast");
  let progress = 0;
  let taps = 0;
  let tapTimer = null;
  let toastTimer = null;

  function activate() {
    toast.textContent = "CHEAT MODE ACTIVATED: +30 lives, infinite coffee";
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 4000);

    if (isMotionPaused()) return;
    for (let i = 0; i < 40; i++) {
      const floppy = document.createElement("span");
      floppy.className = "falling-floppy";
      floppy.setAttribute("aria-hidden", "true");
      floppy.textContent = "💾";
      floppy.style.left = `${Math.random() * 100}vw`;
      floppy.style.animationDuration = `${2 + Math.random() * 2}s`;
      floppy.style.animationDelay = `${Math.random() * 1.5}s`;
      document.body.appendChild(floppy);
      setTimeout(() => floppy.remove(), 5000);
    }
  }

  window.addEventListener("keydown", (event) => {
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    progress = key === KONAMI[progress] ? progress + 1 : key === KONAMI[0] ? 1 : 0;
    if (progress === KONAMI.length) {
      progress = 0;
      activate();
    }
  });

  document.getElementById("floppy").addEventListener("click", () => {
    taps++;
    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => (taps = 0), 1500);
    if (taps === 5) {
      taps = 0;
      activate();
    }
  });
}

// ---------- Sparkle cursor trail ----------

function setupSparkleTrail() {
  const MIN_INTERVAL_MS = 40;
  let lastSparkleTime = 0;

  window.addEventListener("mousemove", (event) => {
    if (isMotionPaused()) return;

    const now = performance.now();
    if (now - lastSparkleTime < MIN_INTERVAL_MS) return;
    lastSparkleTime = now;

    const sparkle = document.createElement("span");
    sparkle.className = "spark";
    sparkle.setAttribute("aria-hidden", "true");
    sparkle.textContent = SPARKLE_SYMBOLS[Math.floor(Math.random() * SPARKLE_SYMBOLS.length)];
    sparkle.style.left = `${event.clientX}px`;
    sparkle.style.top = `${event.clientY}px`;
    sparkle.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  });
}

// ---------- Init ----------

setupMotionToggle();
setupVisitorCounter();
setupGuestbook();
updateDates();
setupFortuneCookie();
setupTabTitle();
setupCheatCode();
setupSparkleTrail();
