/**
 * Ivan Mukoied - Frontend Developer Portfolio
 * Main JavaScript - Handles theme, animations, and interactive terminal
 */

(function () {
  'use strict';

  // ============================================
  // UTILITIES
  // ============================================
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);
  const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // ============================================
  // THEME MANAGEMENT
  // ============================================
  const ThemeManager = {
    STORAGE_KEY: 'portfolio-theme',
    DARK: 'dark',
    LIGHT: 'light',

    init() {
      this.applyInitialTheme();
      this.bindEvents();
    },

    applyInitialTheme() {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(saved || (prefersDark ? this.DARK : this.LIGHT), false);
    },

    setTheme(theme, persist = true) {
      document.documentElement.setAttribute('data-theme', theme);
      if (persist) localStorage.setItem(this.STORAGE_KEY, theme);
      MatrixRain.render();
    },

    toggle() {
      const current = document.documentElement.getAttribute('data-theme');
      this.setTheme(current === this.DARK ? this.LIGHT : this.DARK);
    },

    bindEvents() {
      $('#theme-toggle')?.addEventListener('click', () => this.toggle());
      
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(this.STORAGE_KEY)) {
          this.setTheme(e.matches ? this.DARK : this.LIGHT, false);
        }
      });
    }
  };

  // ============================================
  // MATRIX RAIN EFFECT
  // ============================================
  const MatrixRain = {
    CHARS: '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
    COLUMN_WIDTH: 25,

    render() {
      const container = $('#matrix-bg');
      if (!container || prefersReducedMotion()) {
        if (container) container.innerHTML = '';
        return;
      }

      const columnCount = Math.floor(window.innerWidth / this.COLUMN_WIDTH);
      container.innerHTML = '';

      for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.cssText = `
          left: ${(i / columnCount) * 100}%;
          animation-duration: ${10 + Math.random() * 10}s;
          animation-delay: ${Math.random() * 10}s;
        `;
        column.setAttribute('aria-hidden', 'true');
        column.textContent = this.generateColumnText();
        container.appendChild(column);
      }
    },

    generateColumnText() {
      const length = 10 + Math.floor(Math.random() * 20);
      return Array.from({ length }, () => randomFrom(this.CHARS)).join('');
    }
  };

  // ============================================
  // SCROLL ANIMATIONS
  // ============================================
  const ScrollAnimations = {
    init() {
      if (prefersReducedMotion()) return;

      const observer = new IntersectionObserver(
        (entries) => entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        }),
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      $$('.section, .project-card, .experience-item, .skill-category')
        .forEach(el => observer.observe(el));
    }
  };

  // ============================================
  // INTERACTIVE TERMINAL
  // ============================================
  const Terminal = {
    history: [],
    historyIndex: -1,

    commands: {
      help: () => `
        <p class="success">🎮 Secret Terminal Commands:</p>
        <p>• coffee, matrix, hack, flip, unflip</p>
        <p>• party, joke, sudo, exit, clear</p>
        <p>• ls, cat, rm, pwd, whoami, vim</p>
      `,
      coffee: () => `<p class="success">${randomFrom([
        '☕ CRITICAL: Coffee reserves depleted! Developer may become unresponsive.',
        '☕ Coffee.exe is running at 200% capacity.',
        '☕ Error 418: I\'m a teapot. Wait, wrong protocol.',
        '☕ Loading productivity... [████████░░] 80% (needs more coffee)',
        '☕ Blood type: Espresso positive',
        '☕ Coffee count today: NaN (lost count after the 5th)',
        '☕ brew install more-coffee... Installation successful!'
      ])}</p>`,
      matrix: () => `<p class="success">${randomFrom([
        '🔴 You took the red pill... Welcome to the real world, Neo.',
        '🔵 You took the blue pill... The story ends. You wake up believing whatever you want.',
        '💊 You tried to take both pills... SEGMENTATION FAULT',
        '🟣 You mixed them? That\'s not how this works...'
      ])}</p>`,
      hack: () => `
        <p class="success">INITIATING HACK SEQUENCE...</p>
        <p>Accessing mainframe... ████████████ 100%</p>
        <p>Bypassing firewall... ████████████ 100%</p>
        <p>Downloading secrets... ERROR 403: Nice try, hackerman 😎</p>
      `,
      flip: () => '(╯°□°)╯︵ ┻━┻  <span class="error">TABLE FLIPPED!</span>',
      unflip: () => '┬─┬ノ( º _ ºノ)  <span class="success">Table restored. Crisis averted.</span>',
      party: () => `<p class="success">${randomFrom([
        '🎉🎊🪩 PARTY MODE ACTIVATED! 🪩🎊🎉',
        '🕺💃 The code compiles... TIME TO CELEBRATE! 💃🕺',
        '�� *plays lo-fi beats to code/relax to* 🎵',
        '🎮 Achievement Unlocked: Found the party command!'
      ])}</p>`,
      joke: () => `<p class="success">${randomFrom([
        'Why do programmers prefer dark mode? Because light attracts bugs! 🪲',
        'A SQL query walks into a bar, walks up to two tables and asks... "Can I join you?"',
        'There are only 10 types of people: those who understand binary and those who don\'t.',
        '!false — It\'s funny because it\'s true.',
        'A programmer\'s wife tells him: "Go to the store and buy milk. If they have eggs, get a dozen." He returns with 12 cartons of milk.',
        'Why did the developer go broke? Because he used up all his cache! 💸',
        'It works on my machine! ¯\\_(ツ)_/¯'
      ])}</p>`,
      sudo: (args) => {
        const cmd = args.join(' ');
        if (cmd.includes('make') && cmd.includes('sandwich')) {
          return '<p class="success">🥪 Okay, here\'s your sandwich! (sudo privileges accepted)</p>';
        }
        if (cmd.includes('rm') && cmd.includes('-rf')) {
          return '<p class="error">🚨 NICE TRY! You almost deleted everything... almost.</p>';
        }
        return '<p class="error">Permission denied. This incident will be reported... to no one. 😄</p>';
      },
      exit: () => `<p class="error">${randomFrom([
        'There is no escape. You belong to the terminal now.',
        'exit? In this economy? Nah, stay a while.',
        'Segmentation fault (core dumped)... just kidding, you\'re stuck here.',
        'The terminal has grown attached to you. It would miss you.'
      ])}</p>`,
      ls: () => '<p>secrets.txt  definitely_not_passwords.txt  cat_pictures/  node_modules/</p>',
      cat: (args) => args[0] === 'secrets.txt' 
        ? '<p class="error">Nice try! The secrets are safe... for now.</p>'
        : '<p>😺 Meow! (You didn\'t specify a file, so here\'s a cat)</p>',
      rm: () => '<p class="error">🚫 rm is disabled. We don\'t delete things here, we just add more features.</p>',
      pwd: () => '<p>/home/ivan/secret-lair/you-found-the-terminal</p>',
      whoami: () => '<p class="success">You\'re awesome, that\'s who! 🌟</p>',
      hello: () => '<p class="success">Hello there, friend! 👋 Welcome to the secret terminal zone!</p>',
      hi: () => '<p class="success">Hey! 👋 Glad you found this little Easter egg!</p>',
      vim: () => '<p class="error">You opened vim... and now you can never leave. Press ESC 47 times to try.</p>',
      emacs: () => '<p>Emacs loaded! ...along with a full operating system apparently.</p>',
      clear: () => ''
    },

    execute(input) {
      const [cmd, ...args] = input.trim().toLowerCase().split(' ');
      if (!cmd) return '';
      
      if (this.commands[cmd]) {
        return this.commands[cmd](args);
      }
      
      return `<p class="error">${randomFrom([
        `Command '${cmd}' not found. But hey, you're exploring! Try 'help' 🔍`,
        `'${cmd}'? Never heard of it. Type 'help' for the secret menu.`,
        `bash: ${cmd}: command not found (but your curiosity is appreciated!)`,
        `${cmd}? Is that a new JavaScript framework? Type 'help' for actual commands.`
      ])}</p>`;
    },

    init() {
      const input = $('#terminal-input');
      const output = $('#terminal-output');
      if (!input || !output) return;

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const cmd = input.value.trim();
          if (cmd) {
            this.history.unshift(cmd);
            this.historyIndex = -1;
            output.innerHTML = cmd === 'clear' ? '' : this.execute(cmd);
            input.value = '';
          }
        } else if (e.key === 'ArrowUp' && this.historyIndex < this.history.length - 1) {
          e.preventDefault();
          input.value = this.history[++this.historyIndex];
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          input.value = this.historyIndex > 0 ? this.history[--this.historyIndex] : (this.historyIndex = -1, '');
        }
      });

      $('#terminal-footer')?.addEventListener('click', () => input.focus());
    }
  };

  // ============================================
  // INITIALIZATION
  // ============================================
  function init() {
    ThemeManager.init();
    MatrixRain.render();
    ScrollAnimations.init();
    Terminal.init();

    // Debounced resize handler
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => MatrixRain.render(), 250);
    });

    // Reduced motion preference changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', () => {
      MatrixRain.render();
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
