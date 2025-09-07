// ===== Scrollspy aktif pada navbar =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});

// ===== Tombol Scroll Top =====
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Particles Background =====
// Pastikan sudah load library particles.js di index.html
if (document.getElementById("particles-js")) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      size: { value: 3 },
      move: { speed: 2 },
      line_linked: { enable: true, color: "#00ffe5" },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
      },
    },
  });
}

// ===== Tombol Runner (open URL) =====
function runUrl(url) {
  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.style.position = "fixed";
  iframe.style.top = "0";
  iframe.style.left = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.zIndex = "2000";
  document.body.appendChild(iframe);
}

// ===== Tombol Open Local File =====
function openLocal() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".html,.htm";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const newWin = window.open();
        newWin.document.write(evt.target.result);
      };
      reader.readAsText(file);
    }
  };
  input.click();
}