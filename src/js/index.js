const megaMenu = document.querySelector("#mega-menu");
const ulMegaMenu = document.querySelector(".slide-menu");
const megaMenuContent = document.querySelector(".mega-menu-content");
const todasCategorias = document.querySelector("#todas-categorias");

let hideTimeout;

function mostrarMenu() {
  clearTimeout(hideTimeout);
  megaMenu.classList.remove("hidden");
  ulMegaMenu.classList.remove("hidden");

  if (ulMegaMenu.children.length === 0) {
    for (let index = 0; index < 14; index++) {
      ulMegaMenu.innerHTML += `
        <li class="mega-menu-item"><a href="#">Departamento<span>›</span></a></li>
      `;
    }
  }
}

function esconderMenu() {
  hideTimeout = setTimeout(() => {
    megaMenu.classList.add("hidden");
    ulMegaMenu.classList.add("hidden");
    ulMegaMenu.innerHTML = "";
  }, 200); 
}


todasCategorias.addEventListener("mouseenter", mostrarMenu);
megaMenu.addEventListener("mouseenter", mostrarMenu);


todasCategorias.addEventListener("mouseleave", esconderMenu);
megaMenu.addEventListener("mouseleave", esconderMenu);