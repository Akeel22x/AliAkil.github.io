const lines = [
  "Cybersecurity Engineer | Penetration Tester",
  "Offensive Security • Web Security",
  "CTFs • VPN Systems • Red Teaming",
  "Building: NovaVPN & Pentix.ai"
];

const typeEl = document.getElementById("typeText");
let line = 0, char = 0, del = false;

function type() {
  const text = lines[line];

  if (!del) {
    typeEl.textContent = text.slice(0, ++char);
    if (char === text.length) {
      del = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    typeEl.textContent = text.slice(0, --char);
    if (char === 0) {
      del = false;
      line = (line + 1) % lines.length;
    }
  }
  setTimeout(type, del ? 40 : 60);
}
type();

document.getElementById("year").textContent = new Date().getFullYear();
