// =========================
// MENU MOBILE
// =========================
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.classList.toggle("active");
    }
  }
  
  // Fechar menu ao clicar em um link (mobile)
  const links = document.querySelectorAll("#menu a");
  
  links.forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("menu");
      if (menu) {
        menu.classList.remove("active");
      }
    });
  });
  
  // =========================
  // SCROLL SUAVE 🔥
  // =========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const destino = document.querySelector(this.getAttribute("href"));
  
      if (destino) {
        destino.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
  
  // =========================
  // DARK MODE (com memória)
  // =========================
  const btn = document.getElementById("modoBtn");
  
  // Carregar preferência salva
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
  
  // Fechar clicando fora
  window.onclick = (e) => {
    if (e.target === modal) {
      fecharModal();
    }
  };
  
  // Fechar com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      fecharModal();
    }
  });
  
  // =========================
  // CARROSSEL PROFESSORES 🔥
  // =========================
  let index = 0;
  
  function moverSlide(direcao) {
    const carrossel = document.getElementById("carrossel");
  
    if (!carrossel) return;
  
    const total = carrossel.children.length;
  
    index += direcao;
  
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
  
    carrossel.style.transform = `translateX(-${index * 100}%)`;
  }
  
  // =========================
  // AUTO SLIDE (OPCIONAL 🔥)
  // =========================
  setInterval(() => {
    moverSlide(1);
  }, 5000);
