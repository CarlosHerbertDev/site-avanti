const megaMenu = document.querySelector("#mega-menu");
const ulMegaMenu = document.querySelector(".slide-menu");
const megaMenuContent = document.querySelector(".mega-menu-content");
const todasCategorias = document.querySelector("#todas-categorias");
const categories = document.querySelectorAll(".categories");
const menuItem = document.querySelectorAll(".menu-item");
const departamentos = [
  "Departamento", "Departamento", "Departamento", "Departamento",
  "Departamento", "Departamento", "Departamento", "Departamento",
  "Departamento", "Departamento", "Departamento", "Departamento"
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
 
        itemMegaMenu.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
        categories.forEach((c) => c.classList.remove("active"));
        category.classList.add("active");

      
        if (arrow) arrow.src = "./src/assets/arrow-hover.png";
        
        
        if (category.dataset.dept === 'Departamento') {
          
          console.log('ai');
          
        category.innerHTML = `
          <div class="container-categories">
            <ul class="categories-ul">
              <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
              <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
              <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
              <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
              <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
              <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
              <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
              <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
            </ul>
            <div class="container-image">
              <a>Imagem</a>
            </div>
          </div>
        `;

      } 
    })
    
    
    item.addEventListener("mouseleave", () => {
      if (arrow) arrow.src = "./src/assets/arrow.png";
        })
    });
  }
}

function esconderMenu() {
  hideTimeout = setTimeout(() => {
    megaMenu.classList.add("hidden");
    ulMegaMenu.classList.add("hidden");
    megaMenuContent.classList.add("hidden");
    
    
    todasCategorias.classList.remove("active");
    document.querySelectorAll(".mega-menu-item").forEach((item) => {
      item.classList.remove("active");
      const arrow = item.querySelector("img");
      if (arrow) arrow.src = "./src/assets/arrow.png";
      categories.forEach((c) => c.innerHTML = "");
    });
  }, 200);
}


const containerCategories = document.querySelectorAll(".container-categories");


todasCategorias.addEventListener("mouseenter", mostrarMenu);
todasCategorias.addEventListener("mouseleave", (event) => {
  const related = event.relatedTarget;

  if (!megaMenu.contains(related)) {
    esconderMenu();
  }
});

megaMenu.addEventListener("mouseenter", () => clearTimeout(hideTimeout));
megaMenu.addEventListener("mouseleave", (event) => {
  const related = event.relatedTarget;

  if (!megaMenu.contains(related) && related !== todasCategorias) {
    esconderMenu();
  }
});



menuItem.forEach((item) => { 
  
  if (item.innerHTML === "<strong>☰ Todas as Categorias</strong>") return;
  const headerCategories = document.querySelector(`.header-categories[data-dept="${item.innerText}"]`);
  
  item.addEventListener("mouseenter", () => {
    megaMenu.classList.remove("hidden");
    console.log(headerCategories);
    

    headerCategories.innerHTML +=`
      <h4>Departamento</h4>
      <ul>
          <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
          <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
          <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
          <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
          <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
          <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
          <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
          <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
      </ul>
    
    `
  });

  item.addEventListener("mouseleave", () => {
    megaMenu.classList.add("hidden");
    headerCategories.innerHTML = "";
  });

})