const lines = [
  "I breach and fortify systems.",
  "Ethical Hacker & Security Researcher.",
  "Securing the digital frontier.",
  "Always-on, Always protected."
];

const typeEl = document.getElementById("typeText");
let lineIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
  const currentLine = lines[lineIndex];
  
  if (isDeleting) {
    typeEl.textContent = currentLine.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50;
  } else {
    typeEl.textContent = currentLine.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100;
  }

  if (!isDeleting && charIndex === currentLine.length) {
    isDeleting = true;
    typeSpeed = 2000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    lineIndex = (lineIndex + 1) % lines.length;
    typeSpeed = 500; // Pause before next line
  }

  setTimeout(type, typeSpeed);
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
  type();
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

