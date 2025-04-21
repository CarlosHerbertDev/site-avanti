const megaMenu = document.querySelector("#mega-menu");
const ulMegaMenu = document.querySelector(".slide-menu");
const megaMenuContent = document.querySelector(".mega-menu-content");
const todasCategorias = document.querySelector("#todas-categorias");
const categories = document.querySelectorAll(".categories");
const menuItem = document.querySelectorAll(".menu-item");
const menuCategories = document.querySelector("#menu-categories");
const headerCategories = document.querySelectorAll(".header-categories");
const menuItems = document.querySelectorAll(".menu-item:not(#todas-categorias)");

const teste2 = document.querySelector(".nav-menu");
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
      const category = document.querySelector(`[data-dept="${departamento}"]`)

      item.addEventListener("mouseenter", () => {

        itemMegaMenu.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
        categories.forEach((c) => c.classList.remove("active"));
        category.classList.add("active");

      
        if (arrow) arrow.src = "./src/assets/arrow-hover.png";
        
    
        if (category.dataset.dept === 'Departamento') {
          
          
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

function esconderMenu(timer) {
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
        c.innerHTML = ""
      })
    });
  }, timer);
}

todasCategorias.addEventListener("mouseenter", mostrarMenu);
todasCategorias.addEventListener("mouseleave", (event) => {
  const related = event.relatedTarget;

  if (!megaMenu.contains(related)) {
    esconderMenu(200);
  }
});

megaMenu.addEventListener("mouseenter", () => clearTimeout(hideTimeout));
megaMenu.addEventListener("mouseleave", (event) => {
  const related = event.relatedTarget;

  if (!megaMenu.contains(related) && related !== todasCategorias) {
    esconderMenu(200);
  }
});



  // menuItem.forEach((item) => {
  //   if (item.innerHTML === "<strong>☰ Todas as Categorias</strong>") return;
  //   item.addEventListener("mouseenter", () => {
  //     clearTimeout(hideTimeout);
  //     esconderMenu(0);
  //     const category = document.querySelector(`.header-categories[data-dept="${item.innerText}"]`);
  //     item.classList.add("active");
  //     category.classList.add("active");

  //     if (category.dataset.dept === 'Departamento') {
  //       category.innerHTML = `
  //         <div class="container-categories-menu">
  //               <h4>${item.innerHTML}</h4>
  //                 <ul>
  //                     <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
  //                     <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
  //                     <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
  //                     <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
  //                     <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
  //                     <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
  //                     <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
  //                     <li><a>Categoria</a> <a>Categoria</a> <a>Categoria</a></li>
  //                 </ul>
  //         </div>           
  //         `
  //     }
  //   })

  //   item.addEventListener("mouseleave", () => {
  //     if (item.innerHTML === "<strong>☰ Todas as Categorias</strong>") return;
  //     const category = document.querySelector(`.header-categories[data-dept="${item.innerText}"]`);
  //     hideTimeout = setTimeout(() => {
  //     item.classList.remove("active");
  //     category.classList.remove("active");
  //   }, 200)

  //   })
  // })



































menuItem.forEach((item) => {
  if (item.innerHTML === "<strong>☰ Todas as Categorias</strong>") return;
  item.addEventListener("mouseenter", () => {   
    esconderMenu(0);
    menuCategories.classList.remove("hidden");
    const category = document.querySelector(`.header-categories[data-dept="${item.innerText}"]`);  
    menuItem.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
        headerCategories.forEach((c) => c.classList.remove("active"));
        category.classList.add("active");
        
        if (category.dataset.dept === 'Departamento') {
          
          category.innerHTML =`
          <div class="container-categories-menu">
          <h4>${item.innerHTML}</h4>
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
          </div>
          `
        } 
        
        if (category.dataset.dept === 'teste') {
          
          category.innerHTML =`
          <div class="container-categories-menu">
          <h4>${item.innerHTML}</h4>
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
          </div>
          
        ` 
      }
  });      
  
  item.addEventListener('mouseleave', () => {
    const category = document.querySelector(`.header-categories[data-dept="${item.innerText}"]`);

    // hideTimeout = setTimeout(() => {

  if (item.classList.contains('categorie-active')) {
    item.classList.remove("active");
    category.classList.remove("active");
  }
    // })
  })
})
          
  
// teste2.addEventListener('mouseleave', () => {
//   menuItems.forEach((item) => {
//     const category = document.querySelector(`.header-categories[data-dept="${item.innerText}"]`);  
//     hideTimeout = setTimeout(() => {
//     item.classList.remove('active')
//     category.classList.remove('active')
//     category.innerHTML = '' 
//     }, 2000)
//     })
// })

menuCategories.addEventListener("mouseenter", () =>  {
  clearTimeout(hideTimeout)
  menuItems.forEach((item) => {
    item.classList.add('categorie-active')
  })
})



menuCategories.addEventListener("mouseleave", () => {


      menuCategories.classList.add("hidden");
      menuItems.forEach((item) => {
        item.classList.remove("active");
        item.classList.remove('categorie-active')

      })
      headerCategories.forEach((item) => {
        item.innerHTML = ""
        item.classList.remove("active");
      })
  }
)
















