// A Windows-98-style screensaver: after a while with no input, a floppy logo
// bounces around a black screen like the classic DVD logo. Any input ends it.
// It never runs in boring mode, with motion paused, or on touch devices.

const SCREENSAVER_IDLE_MS = 90 * 1000;
const SCREENSAVER_SPEED = 140; // pixels per second
const SCREENSAVER_COLORS = ["#ff66ff", "#00ffff", "#ffff00", "#00ff00", "#ff9900", "#5c8cff", "#ff3333"];
const CORNER_TOLERANCE = 6; // pixels: how close counts as "hitting the corner"

function setupScreensaver() {
  // ?screensaver in the URL starts it right away (for demos), even on touch devices
  const demo = new URLSearchParams(location.search).has("screensaver");
  const isTouchDevice = matchMedia("(pointer: coarse)").matches;
  if (isTouchDevice && !demo) return;

  let idleTimer = null;
  let overlay = null;
  let frame = null;
  let cornerHits = 0;

  const blocked = () =>
    document.documentElement.classList.contains("boring") ||
    document.documentElement.classList.contains("motion-paused");

  function start() {
    if (blocked() || overlay) return;

    overlay = document.createElement("div");
    overlay.className = "screensaver";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = `
      <p class="screensaver-hits">Corner hits: <span>${cornerHits}</span></p>
      <div class="screensaver-logo"><span>💾</span> Ivan's Homepage</div>
      <p class="screensaver-hint">Move the mouse or press any key to come back</p>`;
    document.body.appendChild(overlay);

    const logo = overlay.querySelector(".screensaver-logo");
    const hitsLabel = overlay.querySelector(".screensaver-hits span");
    let x = Math.random() * (innerWidth - logo.offsetWidth);
    let y = Math.random() * (innerHeight - logo.offsetHeight);
    let dx = Math.random() < 0.5 ? -1 : 1;
    let dy = Math.random() < 0.5 ? -1 : 1;
    let colorIndex = 0;
    let last = performance.now();

    function bounceColor() {
      colorIndex = (colorIndex + 1) % SCREENSAVER_COLORS.length;
      logo.style.color = SCREENSAVER_COLORS[colorIndex];
    }

    function tick(now) {
      const step = (SCREENSAVER_SPEED * Math.min(now - last, 50)) / 1000;
      last = now;
      const maxX = innerWidth - logo.offsetWidth;
      const maxY = innerHeight - logo.offsetHeight;
      x += dx * step;
      y += dy * step;

      let hitX = false;
      let hitY = false;
      if (x <= 0 || x >= maxX) {
        dx = -dx;
        x = Math.max(0, Math.min(x, maxX));
        hitX = true;
      }
      if (y <= 0 || y >= maxY) {
        dy = -dy;
        y = Math.max(0, Math.min(y, maxY));
        hitY = true;
      }
      if (hitX || hitY) bounceColor();

      // The moment everyone waits for
      const nearCornerX = x <= CORNER_TOLERANCE || x >= maxX - CORNER_TOLERANCE;
      const nearCornerY = y <= CORNER_TOLERANCE || y >= maxY - CORNER_TOLERANCE;
      if ((hitX && nearCornerY) || (hitY && nearCornerX)) {
        cornerHits++;
        hitsLabel.textContent = cornerHits;
        overlay.classList.remove("corner");
        void overlay.offsetWidth; // restart the flash animation
        overlay.classList.add("corner");
      }

      logo.style.transform = `translate(${x}px, ${y}px)`;
      frame = requestAnimationFrame(tick);
    }

    logo.style.color = SCREENSAVER_COLORS[0];
    frame = requestAnimationFrame(tick);
  }

  function stop() {
    if (!overlay) return;
    cancelAnimationFrame(frame);
    overlay.remove();
    overlay = null;
  }

  function onActivity() {
    stop();
    clearTimeout(idleTimer);
    idleTimer = setTimeout(start, SCREENSAVER_IDLE_MS);
  }

  for (const type of ["mousemove", "mousedown", "keydown", "wheel", "scroll", "touchstart"]) {
    window.addEventListener(type, onActivity, { passive: true });
  }
  onActivity();

  if (demo) setTimeout(start, 500);
}

setupScreensaver();
