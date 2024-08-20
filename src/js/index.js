/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

        Passo 2 - identificar o clique no botão
        
        Passo 3 - adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - esconder o botão de mostrar mais
        Passo 1 - pegar o botão e esconder ele
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
// const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
// const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

// botaoMostrarProjetos.addEventListener("click", () => {
//   // Passo 3 - adicionar a classe "ativo" nos projetos escondidos
//   mostrarMaisProjetos();

//   // Objetivo 2 - esconder o botão de mostrar mais
//   // Passo 1 - pegar o botão e esconder ele
//   esconderBotao();
// });

// function esconderBotao() {
//   botaoMostrarProjetos.classList.add("remover");
// }

// function mostrarMaisProjetos() {
//   projetosInativos.forEach((projetoInativo) => {
//     projetoInativo.classList.add("ativo");
//   });
// }

// const menuLinks = document.querySelectorAll(".menu-link");
// const menuCheckBox = document.getElementById("menu-hamburguer");

// menuLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     menuCheckBox.checked = false;
//   });
// });

var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
