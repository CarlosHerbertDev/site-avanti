const megaMenu = document.querySelector("#mega-menu");
const ulMegaMenu = document.querySelector(".slide-menu");
const megaMenuContent = document.querySelector(".mega-menu-content");
const todasCategorias = document.querySelector("#todas-categorias");
const categories = document.querySelectorAll(".categories");
const departamentos = [
  "Departamento", "Departamento", "Departamento", "Departamento",
  "Departamento", "Departamento", "Departamento", "Departamento",
  "Departamento", "lucas", "Departamento", "Departamento"
];

let hideTimeout;

function mostrarMenu() {
  clearTimeout(hideTimeout);
  megaMenu.classList.remove("hidden");
  ulMegaMenu.classList.remove("hidden");
  megaMenuContent.classList.remove("hidden");

  // Ativar visual no botão
  todasCategorias.classList.add("active");

  if (ulMegaMenu.children.length === 0) {
    departamentos.forEach((departamento) => {
      ulMegaMenu.innerHTML += `
        <li class="mega-menu-item">
          <p>${departamento}</p>
          <img id="arrow" src="./src/assets/arrow.png" alt="seta">
        </li>
      `;
    });

    const itemMegaMenu = document.querySelectorAll(".mega-menu-item");

    itemMegaMenu.forEach((item) => {
      const arrow = item.querySelector("#arrow");
      const departamento = item.querySelector("p").innerText;
      const category = document.querySelector(`[data-dept="${departamento}"]`)

      item.addEventListener("mouseenter", () => {
        // Remover ativo dos outros
        itemMegaMenu.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");

        // Mudar seta
        if (arrow) arrow.src = "./src/assets/arrow-hover.png";
        
        category.classList.remove("hidden");
        
        if (category.dataset.dept === 'Departamento') {
          
          
        category.innerHTML = `
          <div class="container-categories">
            <ul class="categories-ul">
              <li><a>categoria</a> <a>categoria</a> <a>categoria</a></li>
              <li><a>categoria</a> <a>categoria</a> <a>categoria</a></li>
              <li><a>categoria</a> <a>categoria</a> <a>categoria</a></li>
              <li><a>categoria</a> <a>categoria</a> <a>categoria</a></li>
              <li><a>categoria</a> <a>categoria</a> <a>categoria</a></li>
              <li><a>categoria</a> <a>categoria</a> <a>categoria</a></li>
              <li><a>categoria</a> <a>categoria</a> <a>categoria</a></li>
              <li><a>categoria</a> <a>categoria</a> <a>categoria</a></li>
            </ul>
            <div class="container-image">
              <a>Imagem</a>
            </div>
          </div>
        `;
        // const containerCategories = document.querySelector(".conatiner-categories");
      } else if (category.dataset.dept === 'lucas') {
        category.innerHTML = `
          <div class="container-categories">
            <ul class="categories-ul">
              <li><a>categoria</a> <a>categoria</a> <a>categoria</a></li>
              <li><a>categoria</a> <a>categoria</a> <a>categoria</a></li>
              <li><a>categoria</a> <a>categoria</a> <a>categoria</a></li>
              <li><a>categoria</a> <a>categoria</a> <a>categoria</a></li>
              <li><a>categoria</a> <a>categoria</a> <a>categoria</a></li>
              <li><a>categoria</a> <a>categoria</a> <a>categoria</a></li>
              <li><a>categoria</a> <a>categoria</a> <a>categoria</a></li>
              <li><a>categoria</a> <a>categoria</a> <a>categoria</a></li>
            </ul>
            <div class="container-image">
              <img src="./src/assets/arrow.png" alt="imagem">
            </div>
          </div>
        `;
        
      }
    })
    
    
    item.addEventListener("mouseleave", () => {
      if (arrow) arrow.src = "./src/assets/arrow.png";
          category.classList.add("hidden");
      })
    });
  }
}

function esconderMenu() {
  hideTimeout = setTimeout(() => {
    megaMenu.classList.add("hidden");
    ulMegaMenu.classList.add("hidden");
    megaMenuContent.classList.add("hidden");
    
    // Resetar os estilos ativos
    todasCategorias.classList.remove("active");
    document.querySelectorAll(".mega-menu-item").forEach((item) => {
      item.classList.remove("active");
      const arrow = item.querySelector("img");
      if (arrow) arrow.src = "./src/assets/arrow.png";
    });
  }, 200);
}

// Eventos

// const containerCategories = document.querySelectorAll(".container-categories");


// todasCategorias.addEventListener("mouseenter", mostrarMenu);
// todasCategorias.addEventListener("mouseleave", (event) => {
//   const related = event.relatedTarget;

//   // Se o mouse ainda estiver dentro do mega menu (ex: indo pra .categories), não esconde
//   if (!megaMenu.contains(related)) {
//     esconderMenu();
//   }
// });

// megaMenu.addEventListener("mouseenter", () => clearTimeout(hideTimeout));
// megaMenu.addEventListener("mouseleave", (event) => {
//   const related = event.relatedTarget;

//   // Se o mouse ainda estiver dentro do mega menu (inclusive categorias), não esconde
//   if (!megaMenu.contains(related) && related !== todasCategorias) {
//     esconderMenu();
//   }
// });

const wrapper = document.querySelector(".mega-menu-wrapper");

wrapper.addEventListener("mouseenter", mostrarMenu);
wrapper.addEventListener("mouseleave", esconderMenu);

// categories.forEach((category) => {
//   category.addEventListener("mouseenter", () => {
//     console.log(category);
//       category.classList.remove("hidden");

//     })
// })
