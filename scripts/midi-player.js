// A tiny 8-bit "MIDI" player for the sidebar.
// Songs are original chiptunes synthesized live with the Web Audio API,
// so there are no audio files to download.

// ---------- Songs ----------
//
// Each part is a string of steps separated by spaces (one step = an eighth note):
//   "C5"  play a note       "-"  hold the previous note longer       "."  rest
// Drums use "x" for a hi-hat tick.

const SONGS = [
  {
    title: "portfolio.mid",
    bpm: 132,
    parts: [
      {
        wave: "square",
        volume: 0.22,
        notes:
          "E5 G5 C6 G5 E5 G5 C6 D6 " +
          "D6 B5 G5 B5 D6 - B5 . " +
          "C6 A5 E5 A5 C6 E6 D6 C6 " +
          "A5 - C6 - F5 G5 A5 .",
      },
      {
        wave: "triangle",
        volume: 0.5,
        notes:
          "C3 - C3 - G3 - C3 - " +
          "G2 - G2 - D3 - G2 - " +
          "A2 - A2 - E3 - A2 - " +
          "F2 - F2 - C3 - F2 -",
      },
      { drums: true, volume: 0.08, notes: ". x . x . x . x ".repeat(4) },
    ],
  },
  {
    title: "debugging_at_3am.mid",
    bpm: 76,
    parts: [
      {
        wave: "triangle",
        volume: 0.45,
        notes:
          "A4 - C5 - E5 - - . " +
          "F4 - A4 - C5 - B4 - " +
          "G4 - C5 - E5 - G5 - " +
          "G#4 - B4 - E5 - - .",
      },
      {
        wave: "sine",
        volume: 0.35,
        notes: "A2 - - - - - - - F2 - - - - - - - C3 - - - - - - - E2 - - - - - - -",
      },
    ],
  },
  {
    title: "merge_conflict.mid",
    bpm: 168,
    // The screen alternates between these while the song plays.
    screenText: ["<<<<<<< HEAD", "=======", ">>>>>>> main"],
    parts: [
      { wave: "square", volume: 0.16, notes: "C5 D5 E5 F5 G5 F5 E5 D5 C5 E5 G5 C6 G5 E5 C5 ." },
      // Same melody, one semitone up and one step late: the "conflict".
      { wave: "sawtooth", volume: 0.1, notes: ". C#5 D#5 F5 F#5 G#5 F#5 F5 D#5 C#5 F5 G#5 C#6 G#5 F5" },
      { drums: true, volume: 0.1, notes: "x x x x x x x x x x x x x x x x" },
    ],
  },
  {
    title: "coffee_break.mid",
    bpm: 88,
    parts: [
      {
        wave: "triangle",
        volume: 0.45,
        notes:
          "A4 - C5 . E5 - D5 C5 A4 - - . G4 A4 C5 . " +
          "F4 - A4 . C5 - B4 A4 G4 - - . . . . .",
      },
      {
        wave: "sine",
        volume: 0.35,
        notes: "F2 - - - - - - - D2 - - - - - - - G2 - - - - - - - C3 - - - - - - -",
      },
      { drums: true, volume: 0.05, notes: ". . x . . . x . ".repeat(4) },
    ],
  },
  {
    title: "standup_meeting.mid",
    bpm: 100,
    screenText: ["daily standup", "yesterday I...", "...still talking...", "any blockers?", "could've been an email"],
    parts: [
      // Intentionally the same few notes forever.
      { wave: "square", volume: 0.14, notes: "C5 . C5 . D5 . C5 . ".repeat(4) },
      { wave: "triangle", volume: 0.45, notes: "C3 - - - ".repeat(8) },
    ],
  },
  {
    title: "npm_install.mid",
    bpm: 140,
    screenText: [
      "[#.........] 10%",
      "[###.......] 30%",
      "[#####.....] 50%",
      "[#######...] 70%",
      "[#########.] 99%",
      "1,204 vulnerabilities",
    ],
    parts: [
      {
        wave: "square",
        volume: 0.15,
        notes:
          "C4 E4 G4 C5 D4 F4 A4 D5 E4 G4 B4 E5 F4 A4 C5 F5 " +
          "G4 B4 D5 G5 A4 C5 E5 A5 B4 D5 F5 B5 C5 E5 G5 C6",
      },
      {
        wave: "triangle",
        volume: 0.45,
        notes: "C3 - - - D3 - - - E3 - - - F3 - - - G3 - - - A3 - - - B3 - - - C4 - - -",
      },
    ],
  },
  {
    title: "deploy_on_friday.mid",
    bpm: 150,
    screenText: ["deploying to prod...", "it's 4:59pm, friday", "rollback.sh ready?"],
    parts: [
      {
        wave: "sawtooth",
        volume: 0.1,
        notes:
          "D5 . D5 . F5 . D5 . C5 . C5 . E5 . C5 . " +
          "A#4 . A#4 . D5 . A#4 . A4 - - - C#5 - - -",
      },
      {
        wave: "triangle",
        volume: 0.5,
        notes: "D3 ".repeat(8) + "C3 ".repeat(8) + "A#2 ".repeat(8) + "A2 ".repeat(8),
      },
      { drums: true, volume: 0.09, notes: "x ".repeat(32) },
    ],
  },
  {
    title: "legacy_code.mid",
    bpm: 70,
    screenText: ["// TODO: fix (2009)", "var self = this;", "$(document).ready("],
    parts: [
      { wave: "sawtooth", volume: 0.08, notes: "E3 - G3 - A#3 - A3 - G3 - E3 - D#3 - E3 -" },
      { wave: "sine", volume: 0.4, notes: "E2 - - - - - - - D#2 - - - - - - -" },
    ],
  },
  {
    title: "safari_bug_hunt.mid",
    bpm: 112,
    screenText: ["hunting safari bugs", "-webkit-...", "works in chrome tho"],
    parts: [
      {
        wave: "square",
        volume: 0.15,
        notes:
          "E4 . . E4 . . G4 . E4 . . E4 . . A#4 B4 " +
          "E4 . . E4 . . D5 . C5 . . B4 . . G4 A4",
      },
      { wave: "triangle", volume: 0.5, notes: "E2 . ".repeat(16) },
      { drums: true, volume: 0.06, notes: ". . . x ".repeat(8) },
    ],
  },
  {
    title: "all_tests_passing.mid",
    bpm: 128,
    screenText: ["✓ 1,337 passed", "0 failed", "coverage: 90%+"],
    parts: [
      {
        wave: "square",
        volume: 0.2,
        notes:
          "C5 . C5 C5 G5 - - . E5 - D5 - C5 - - . " +
          "F5 . F5 F5 A5 - - . G5 - E5 - C6 - - .",
      },
      {
        wave: "triangle",
        volume: 0.5,
        notes:
          "C3 - G3 - C3 - G3 - C3 - G3 - C3 - G3 - " +
          "F2 - C3 - F2 - C3 - G2 - D3 - G2 - B2 -",
      },
      { drums: true, volume: 0.08, notes: ". x ".repeat(16) },
    ],
  },
  {
    title: "definitely_not_a_rickroll.mid",
    bpm: 120,
    playOnce: true,
    parts: [
      { wave: "square", volume: 0.22, notes: "G4 C5 E5 G5 - E5 G5 - - - . ." },
      { wave: "triangle", volume: 0.5, notes: "C3 - - - - - C3 - - - . ." },
    ],
  },
];

// Shown after the "not a rickroll" fanfare. It links to the official video.
const BONUS_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

// ---------- Synth ----------

const NOTE_OFFSETS = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

function noteToFrequency(note) {
  const [, letter, sharp, octave] = note.match(/^([A-G])(#?)(\d)$/);
  const midiNumber = 12 * (Number(octave) + 1) + NOTE_OFFSETS[letter] + (sharp ? 1 : 0);
  return 440 * Math.pow(2, (midiNumber - 69) / 12);
}

// Turns "C5 - E5 ." into [{ note: "C5", start: 0, length: 2 }, { note: "E5", start: 2, length: 1 }]
function parseNotes(text) {
  const steps = text.trim().split(/\s+/);
  const events = [];

  steps.forEach((step, index) => {
    if (step === "-" || step === ".") return;

    let length = 1;
    while (steps[index + length] === "-") length++;

    events.push({ note: step, start: index, length });
  });

  return { events, totalSteps: steps.length };
}

class ChiptunePlayer {
  constructor() {
    this.context = null;
    this.master = null;
    this.analyser = null;
    this.activeSources = [];
    this.loopTimer = null;
  }

  // Browsers only allow audio after a user gesture, so the context is created lazily.
  ensureContext() {
    if (this.context) return;

    this.context = new AudioContext();
    this.master = this.context.createGain();
    this.master.gain.value = 0.25;
    this.analyser = this.context.createAnalyser();
    this.analyser.fftSize = 64;
    this.master.connect(this.analyser);
    this.analyser.connect(this.context.destination);

    // One second of white noise, reused for every hi-hat tick.
    const length = this.context.sampleRate;
    this.noiseBuffer = this.context.createBuffer(1, length, this.context.sampleRate);
    const data = this.noiseBuffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
  }

  play(song, onFinished) {
    this.stop();
    this.ensureContext();
    this.context.resume();

    const stepSeconds = 60 / song.bpm / 2;
    const parts = song.parts.map((part) => ({ ...part, ...parseNotes(part.notes) }));
    const loopSteps = Math.max(...parts.map((part) => part.totalSteps));
    const loopSeconds = loopSteps * stepSeconds;

    const scheduleLoop = (startTime) => {
      parts.forEach((part) => {
        part.events.forEach((event) => {
          const time = startTime + event.start * stepSeconds;
          if (part.drums) {
            this.playNoise(time, part.volume);
          } else {
            this.playTone(noteToFrequency(event.note), time, event.length * stepSeconds, part.wave, part.volume);
          }
        });
      });

      // Queue the next loop shortly before this one ends.
      const msUntilEnd = (startTime + loopSeconds - this.context.currentTime) * 1000;
      this.loopTimer = setTimeout(() => {
        if (song.playOnce) {
          onFinished?.();
        } else {
          scheduleLoop(startTime + loopSeconds);
        }
      }, Math.max(0, msUntilEnd - 150));
    };

    scheduleLoop(this.context.currentTime + 0.05);
  }

  playTone(frequency, time, duration, wave, volume) {
    const oscillator = this.context.createOscillator();
    const envelope = this.context.createGain();

    oscillator.type = wave;
    oscillator.frequency.value = frequency;

    // Quick attack, gentle decay, short release so notes don't click.
    envelope.gain.setValueAtTime(0, time);
    envelope.gain.linearRampToValueAtTime(volume, time + 0.01);
    envelope.gain.exponentialRampToValueAtTime(volume * 0.6, time + duration * 0.6);
    envelope.gain.linearRampToValueAtTime(0, time + duration);

    oscillator.connect(envelope).connect(this.master);
    oscillator.start(time);
    oscillator.stop(time + duration + 0.02);
    this.track(oscillator);
  }

  playNoise(time, volume) {
    const source = this.context.createBufferSource();
    const filter = this.context.createBiquadFilter();
    const envelope = this.context.createGain();

    source.buffer = this.noiseBuffer;
    filter.type = "highpass";
    filter.frequency.value = 7000;
    envelope.gain.setValueAtTime(volume, time);
    envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.05);

    source.connect(filter).connect(envelope).connect(this.master);
    source.start(time);
    source.stop(time + 0.06);
    this.track(source);
  }

  track(source) {
    this.activeSources.push(source);
    source.onended = () => {
      this.activeSources = this.activeSources.filter((item) => item !== source);
    };
  }

  stop() {
    clearTimeout(this.loopTimer);
    this.activeSources.forEach((source) => {
      try {
        source.stop();
      } catch {
        // Already stopped.
      }
    });
    this.activeSources = [];
  }

  // Returns 0–1 levels for the little equalizer bars.
  levels(barCount) {
    if (!this.analyser) return new Array(barCount).fill(0);

    const data = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(data);
    return Array.from({ length: barCount }, (_, i) => data[i * 2 + 1] / 255);
  }
}

// ---------- Player UI ----------

function setupMidiPlayer() {
  const playButton = document.getElementById("midi-play");
  const nextButton = document.getElementById("midi-next");
  const screen = document.getElementById("midi-screen");
  const title = document.getElementById("midi-title");
  const trackNumber = document.getElementById("midi-track");
  const bars = [...document.querySelectorAll("#midi-viz i")];

  if (!window.AudioContext) {
    title.textContent = "no sound card detected";
    playButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  const player = new ChiptunePlayer();
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let current = 0;
  let isPlaying = false;
  let screenTimer = null;
  let animationFrame = null;

  function setTitle(text) {
    title.textContent = text;
    // Scroll the title like an old LCD if it doesn't fit.
    title.classList.toggle("scrolling", title.scrollWidth > screen.clientWidth);
  }

  function showSong() {
    setTitle(SONGS[current].title);
    trackNumber.textContent = `${current + 1}/${SONGS.length}`;
  }

  function animateBars() {
    const levels = player.levels(bars.length);
    bars.forEach((bar, i) => {
      bar.style.height = `${Math.max(2, levels[i] * 16)}px`;
    });
    animationFrame = requestAnimationFrame(animateBars);
  }

  function stopVisuals() {
    clearInterval(screenTimer);
    cancelAnimationFrame(animationFrame);
    bars.forEach((bar) => (bar.style.height = "2px"));
  }

  function showRickrollLink() {
    isPlaying = false;
    playButton.textContent = "▶";
    stopVisuals();
    title.classList.remove("scrolling");
    title.innerHTML = `<a href="${BONUS_URL}" target="_blank" rel="noopener">★ FULL VERSION ★</a>`;
  }

  function start() {
    const song = SONGS[current];
    isPlaying = true;
    playButton.textContent = "■";
    playButton.setAttribute("aria-label", "Stop");
    showSong();

    player.play(song, song.playOnce ? showRickrollLink : null);

    if (song.screenText) {
      let index = 0;
      screenTimer = setInterval(() => setTitle(song.screenText[index++ % song.screenText.length]), 700);
    }
    if (!reducedMotion) animateBars();
  }

  function stop() {
    isPlaying = false;
    player.stop();
    stopVisuals();
    playButton.textContent = "▶";
    playButton.setAttribute("aria-label", "Play");
    showSong();
  }

  playButton.addEventListener("click", () => (isPlaying ? stop() : start()));

  nextButton.addEventListener("click", () => {
    const wasPlaying = isPlaying;
    stop();
    current = (current + 1) % SONGS.length;
    showSong();
    if (wasPlaying) start();
  });

  showSong();
}

setupMidiPlayer();
