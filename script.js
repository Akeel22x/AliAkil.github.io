// OLD TYPEWRITER REMOVED

// CHATBOT LOGIC
const chatLauncher = document.getElementById('chatLauncher');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');

if (chatLauncher) {
  chatLauncher.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
  });
}

if (chatClose) {
  chatClose.addEventListener('click', () => {
    chatWindow.classList.remove('active');
  });
}

function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.className = `msg ${sender}`;
  msg.textContent = sender === 'bot' ? `SYSTEM: ${text}` : `USER: ${text}`;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChat() {
  const text = chatInput.value.trim();
  if (!text) return;

  addMessage(text, 'user');
  chatInput.value = '';

  // Enhanced personal response logic
  setTimeout(() => {
    const lower = text.toLowerCase();
    let response = "COMMAND_NOT_FOUND. I am programmed to provide intel on ALI_AKIL. Access restricted.";

    if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
      response = "Greetings. I am Ali's tactical assistant. How can I help you explore his profile today?";
    } else if (lower.includes('who are you') || lower.includes('what are you')) {
      response = "I am an AI interface built to represent Ali Akil. I can provide details on his certifications, projects, and professional background.";
    } else if (lower.includes('tell me about ali') || lower.includes('who is ali') || lower.includes('about him')) {
      response = "Ali Akil is a Cybersecurity Engineer with a specialty in Offensive Security. He holds a degree in Cybersecurity Engineering and multiple certifications like eJPT, ICCA, and CRTOM. He's currently hunting for vulnerabilities and preparing for his OSCP.";
    } else if (lower.includes('work') || lower.includes('projects') || lower.includes('what has he done')) {
      response = "Ali has developed several security-focused projects. Most notable is NovaVPN, an AI-integrated VPN platform. You can find more in the [Projects] section below.";
    } else if (lower.includes('skills') || lower.includes('what can he do')) {
      response = "Ali is proficient in Penetration Testing, Web Security, Red Teaming, and Python scripting. He's a specialist in both offensive and defensive operations.";
    } else if (lower.includes('contact') || lower.includes('email') || lower.includes('reach')) {
      response = "You can secure a communication channel with Ali at: aliakil22x@gmail.com. He's also active on LinkedIn and GitHub.";
    } else if (lower.includes('oscp')) {
      response = "Ali is currently in the 'DEPLOYMENT' phase for OSCP. Estimated completion is 2026. He's deep into labs and exploitation training.";
    } else if (lower.includes('hobby') || lower.includes('free time') || lower.includes('interest')) {
      response = "Outside the terminal, Ali is passionate about continuous learning in the tech space, participating in CTFs, and exploring the latest in AI and networking.";
    }

    addMessage(response, 'bot');
  }, 800);
}

if (chatSend) {
  chatSend.addEventListener('click', handleChat);
}

if (chatInput) {
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleChat();
  });
}

// HERO TITLE DECRYPTION EFFECT
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="d-char">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const titleEl = document.querySelector('.glitch-title');
if (titleEl) {
  const fx = new TextScramble(titleEl);
  const name = "ALI AKIL";

  // Decrypt on load
  setTimeout(() => fx.setText(name), 500);

  // Re-decrypt on hover
  titleEl.parentElement.addEventListener('mouseenter', () => fx.setText(name));
}

// Start animations
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // THEME TOGGLE LOGIC
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      themeBtn.textContent = isLight ? '☀️' : '🌙';
    });
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
