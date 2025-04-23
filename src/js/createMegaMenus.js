


export default function createMegaMenus() {
  const megaMenu = document.querySelector("#mega-menu");
  const ulMegaMenu = document.querySelector(".slide-menu");
  const megaMenuContent = document.querySelector(".mega-menu-content");
  const todasCategorias = document.querySelector("#todas-categorias");
  const categories = document.querySelectorAll(".categories");
  const menuItem = document.querySelectorAll(".menu-item");
  const menuCategories = document.querySelector("#menu-categories");
  const headerCategories = document.querySelectorAll(".header-categories");
  const menuItems = document.querySelectorAll(
    ".menu-item:not(#todas-categorias)"
  );

 
  const navegation = document.querySelector(".nav-menu");
  const departamentos = [
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
  ];

  let hideTimeout;

  function showMenu() {
    clearTimeout(hideTimeout);
    megaMenu.classList.remove("hidden");
    ulMegaMenu.classList.remove("hidden");
    megaMenuContent.classList.remove("hidden");
    menuItem.forEach((item) => item.classList.remove("active"));
    headerCategories.forEach((item) => item.classList.remove("active"));

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
        const category = document.querySelector(
          `[data-dept="${departamento}"]`
        );

        item.addEventListener("mouseenter", () => {
          itemMegaMenu.forEach((i) => i.classList.remove("active"));
          item.classList.add("active");
          categories.forEach((c) => c.classList.remove("active"));
          category.classList.add("active");

          if (arrow) arrow.src = "./src/assets/arrow-hover.png";

          if (category.dataset.dept === "Departamento") {
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
              <img src="./src/assets/banner-avanti.png">
              <p>Confira os Produtos <span>Que acabaram De chegar</span></p>
              <button>
                <a href="#">
                  Ver todos
                </a> 
              </button>
            </div>
          </div>
        `;
          }
        });

        item.addEventListener("mouseleave", () => {
          if (arrow) arrow.src = "./src/assets/arrow.png";
        });
      });
    }
  }

  function hideMenu(timer) {
    hideTimeout = setTimeout(() => {
      megaMenu.classList.add("hidden");
      ulMegaMenu.classList.add("hidden");
      megaMenuContent.classList.add("hidden");

      todasCategorias.classList.remove("active");
      document.querySelectorAll(".mega-menu-item").forEach((item) => {
        item.classList.remove("active");
        const arrow = item.querySelector("img");
        if (arrow) arrow.src = "./src/assets/arrow.png";
        categories.forEach((c) => {
          c.classList.remove("active");
          c.innerHTML = "";
        });
      });
    }, timer);
  }

  menuItem.forEach((item) => {
    if (item.id === "todas-categorias") return;
    item.addEventListener("mouseenter", () => {
      hideMenu(0);
      hideTimeout = setTimeout(() => {
      if (megaMenu.classList.contains('hidden')) {
        
        const category = document.querySelector(
          `.header-categories[data-dept="${item.innerText}"]`
        );
        menuItem.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
        headerCategories.forEach((c) => c.classList.remove("active"));
        category.classList.add("active");
        
        if (category.dataset.dept === "Departamento") {
          category.innerHTML = `
          <h4 class="title-departament">${item.innerHTML}</h4>
            <div class="container-categories">
                <ul class="categories-ul-header">
                    <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
                    <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
                    <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
                    <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
                    <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
                    <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
                    <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
                    <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
                </ul>
                <div class="container-image-header">
                    <img src="./src/assets/banner-avanti.png">
                    <p>Confira os Produtos <span>Que acabaram De chegar</span></p>
                    <button>
                      <a href="#">
                        Ver todos
                      </a> 
                    </button>
                </div>
              </div>
            `;
          }
        }
      }, 200);
    });
  });
    
    function hideMenuHeader() {
      menuItems.forEach((item) => {
        item.classList.remove("active");
        console.log(item);
    });
    headerCategories.forEach((item) => {
      item.classList.remove("active");
    });
  }

  todasCategorias.addEventListener("mouseenter", showMenu);
  megaMenu.addEventListener("mouseenter", () => clearTimeout(hideTimeout));
  megaMenu.addEventListener("mouseleave", (event) => {
    const related = event.relatedTarget;

    if (!megaMenu.contains(related) && related !== todasCategorias) {
      hideMenu(200);
    }
  });
  menuCategories.addEventListener("mouseenter", () =>
    clearTimeout(hideTimeout)
  );
  menuCategories.addEventListener("mouseleave", () => {
    hideMenuHeader();
  });

  navegation.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
      hideMenu(0);
      hideMenuHeader();
    }, 200);
  });
}
