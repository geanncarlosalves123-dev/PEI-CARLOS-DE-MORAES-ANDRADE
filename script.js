// =========================
// MENU MOBILE
// =========================
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu) menu.classList.toggle("active");
}

document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    if (menu) menu.classList.remove("active");
  });
});

// =========================
// SCROLL SUAVE
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));

    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// =========================
// DARK MODE
// =========================
const btn = document.getElementById("modoBtn");

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
  if (btn) btn.textContent = "☀️";
}

if (btn) {
  btn.onclick = () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDark);

    btn.textContent = isDark ? "☀️" : "🌙";
  };
}

// =========================
// MODAL
// =========================
const modal = document.getElementById("modal");
const modalNome = document.getElementById("modalNome");
const modalIdade = document.getElementById("modalIdade");
const modalMateria = document.getElementById("modalMateria");
const modalImg = document.getElementById("modalImg");

function abrirModal(nome, idade, materia, img) {
  if (modal) modal.style.display = "flex";
  if (modalNome) modalNome.textContent = nome;
  if (modalIdade) modalIdade.textContent = "Idade: " + idade;
  if (modalMateria) modalMateria.textContent = "Matéria: " + materia;
  if (modalImg) modalImg.src = img;
}

function fecharModal() {
  if (modal) modal.style.display = "none";
}

window.onclick = (e) => {
  if (e.target === modal) fecharModal();
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fecharModal();
});

// =========================
// HEADER SCROLL EFFECT
// =========================
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// =========================
// CARROSSEL PROFESSORES
// =========================
let professorIndex = 0;

function moverProfessor(direcao) {
  const slider = document.getElementById("professorSlider");
  if (!slider) return;

  const total = slider.children.length;

  professorIndex += direcao;

  if (professorIndex < 0) professorIndex = total - 1;
  if (professorIndex >= total) professorIndex = 0;

  slider.style.transform = `translateX(-${professorIndex * 100}%)`;
}

// =========================
// CARROSSEL CURSOS
// =========================
let cursoIndex = 0;

function moverCurso(direcao) {
  const slider = document.getElementById("cursoSlider");
  if (!slider) return;

  const total = slider.children.length;

  cursoIndex += direcao;

  if (cursoIndex < 0) cursoIndex = total - 1;
  if (cursoIndex >= total) cursoIndex = 0;

  slider.style.transform = `translateX(-${cursoIndex * 100}%)`;
}

// =========================
// AUTO SLIDE
// =========================
setInterval(() => {
  moverProfessor(1);
}, 6000);

setInterval(() => {
  moverCurso(1);
}, 5000);

// =========================
// EFEITO PARALLAX BANNER 🔥
// =========================
const banner = document.querySelector(".banner");

if (banner) {
  banner.addEventListener("mousemove", (e) => {
    let x = (e.clientX / window.innerWidth - 0.5) * 10;
    let y = (e.clientY / window.innerHeight - 0.5) * 10;

    banner.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  });
}
