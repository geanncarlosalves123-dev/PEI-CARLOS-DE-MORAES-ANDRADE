// MENU MOBILE
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.classList.toggle("active");
    }
  }
  
  // DARK MODE
  const btn = document.getElementById("modoBtn");
  
  if (btn) {
    btn.onclick = () => {
      document.body.classList.toggle("dark");
      btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    };
  }
  
  // MODAL (pegando os elementos corretamente)
  const modal = document.getElementById("modal");
  const modalNome = document.getElementById("modalNome");
  const modalIdade = document.getElementById("modalIdade");
  const modalMateria = document.getElementById("modalMateria");
  const modalImg = document.getElementById("modalImg");
  
  function abrirModal(nome, idade, materia, img) {
    if (modal) {
      modal.style.display = "flex";
    }
    if (modalNome) modalNome.textContent = nome;
    if (modalIdade) modalIdade.textContent = "Idade: " + idade;
    if (modalMateria) modalMateria.textContent = "Matéria: " + materia;
    if (modalImg) modalImg.src = img;
  }
  
  function fecharModal() {
    if (modal) {
      modal.style.display = "none";
    }
  }
  
  // Fechar clicando fora do modal
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };