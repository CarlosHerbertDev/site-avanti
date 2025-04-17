const megaMenu = document.querySelector("#mega-menu");
const ulMegaMenu = document.querySelector(".slide-menu");
const megaMenuContent = document.querySelector(".mega-menu-content");
const todasCategorias = document.querySelector("#todas-categorias");
const departamentos = ['Departamento','Departamento','Departamento','Departamento','Departamento','Departamento','Departamento','Departamento','Departamento','Departamento','Departamento','Departamento','Departamento','Departamento']


let hideTimeout;

function mostrarMenu() {
  clearTimeout(hideTimeout);
  ulMegaMenu.classList.remove("hidden");
  megaMenuContent.classList.remove("hidden");

  if (ulMegaMenu.children.length === 0) {
      departamentos.forEach((departamento) => {
        ulMegaMenu.innerHTML += `
        <li class="mega-menu-item">
          <p>${departamento}</p> 
          <img id="arrow" src="./src/assets/arrow.png" alt="seta">
        </li>
      `;
    })
  }
  
  const itemMegaMenu = document.querySelectorAll(".mega-menu-item");
    itemMegaMenu.forEach((item) => {
  
    const arrow = item.querySelector("#arrow");
      
    item.addEventListener("mouseenter", () => {
    arrow.src = "./src/assets/arrow-hover.png";
    const departamento = document.querySelector('p').innerText
    const categories = document.querySelectorAll(".categories");
        categories.forEach((category) => {
          console.log(category);
          console.log(departamento);
          
          
          const categoryName = document.querySelector('[data-dept="Departamento"]').dataset.dept;

          console.log(categoryName);
          
          if (categoryName === 'Departamento') {
            category.innerHTML += `
            <div class = "conatiner-categories">
      
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
              <a>teste</a>
            </div>
            `
          }
        })    
    })
  
    item.addEventListener("mouseleave", () => {
    arrow.src = "./src/assets/arrow.png";
    })





  })

  








}

todasCategorias.addEventListener("mouseenter", mostrarMenu);









































// let hideTimeout;

// function mostrarMenu() {
//   clearTimeout(hideTimeout);
//   megaMenu.classList.remove("hidden");
//   ulMegaMenu.classList.remove("hidden");
//   megaMenuContent.classList.remove("hidden");

//   if (ulMegaMenu.children.length === 0) {
//     for (let index = 0; index < 14; index++) {
//       ulMegaMenu.innerHTML += `
//         <li class="mega-menu-item">
//           Departamento <img id="arrow" src="./src/assets/arrow.png" alt="seta">
//         </li>
//       `;
//     }
//       const itemMegaMenu = document.querySelectorAll(".mega-menu-item");
//       itemMegaMenu.forEach((item) => {

//       const arrow = item.querySelector("#arrow");
//       console.log(arrow);
      
        
//       item.addEventListener("mouseenter", () => {
//       arrow.src = "./src/assets/arrow-hover.png";
//       })
  
//       item.addEventListener("mouseleave", () => {
//       arrow.src = "./src/assets/arrow.png";
//       })
//     })  






//   } 

// }


// function esconderMenu() {
//   hideTimeout = setTimeout(() => {
//     megaMenu.classList.add("hidden");
//     ulMegaMenu.classList.add("hidden");
//     megaMenuContent.classList.add("hidden");
//     ulMegaMenu.innerHTML = "";
//   }, 200); 
// }


// todasCategorias.addEventListener("mouseenter", mostrarMenu);
// megaMenu.addEventListener("mouseenter", mostrarMenu);


// todasCategorias.addEventListener("mouseleave", esconderMenu);
// megaMenu.addEventListener("mouseleave", esconderMenu);


