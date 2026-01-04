// Typing effect (hero subtitle)
const lines = [
  "Cybersecurity Engineer",
  "Offensive Security • Cloud Security",
  "CTFs • Web Security • VPN Systems",
  "Building: NovaVPN & Pentix.ai"
];

const typeEl = document.getElementById("typeText");
let lineIndex = 0;
let charIndex = 0;
let deleting = false;

function tick() {
  const current = lines[lineIndex];

  if (!deleting) {
    charIndex++;
    typeEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(tick, 1100);
      return;
    }
  } else {
    charIndex--;
    typeEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
    }
  }
  setTimeout(tick, deleting ? 35 : 55);
}
tick();

// Theme toggle (dark/light)
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

themeBtn?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "" : "light";
  if (next) document.documentElement.setAttribute("data-theme", next);
  else document.documentElement.removeAttribute("data-theme");
  localStorage.setItem("theme", next || "");
});

// Mailto form (no backend)
const mailForm = document.getElementById("mailForm");
mailForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const subject = encodeURIComponent(document.getElementById("subject").value.trim());
  const message = encodeURIComponent(document.getElementById("message").value.trim());

  const to = "aliakil22x@gmail.com"; // Change if needed
  const url = `mailto:${to}?subject=${subject}&body=${message}`;
  window.location.href = url;
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
