import createMegaMenus from "./createMegaMenus.js";

createMegaMenus()


//   const carousel = document.querySelector('.carousel');
//   const dots = document.querySelectorAll('.dot');
//   let currentIndex = 0;

//   function updateCarousel(index) {
//     const cardWidth = document.querySelector('.card').offsetWidth + 1246;
//     carousel.style.transform = `translateX(-${cardWidth * index}px)`;
//     dots.forEach(dot => dot.classList.remove('active'));
//     dots[index].classList.add('active');
//     currentIndex = index;
//   }

//   dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => updateCarousel(index));
//   });


const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const cards = document.querySelectorAll('.card');



for (let index = 0; index < 13; index++) {
    carousel.innerHTML += `
       <div class="card">
              <span class="badge">NOVO</span>
              <img src="./src/assets/image-products.png" alt="Produto" />
              <h3 class="title-product">Lorem ipsum dolor sit amet consectetuer adipiscing elit</h3>
              <div class="values">
                <div class ='prices'>
                  <p class="old-price">R$ 100,00</p>
                  <p class="new-price">R$ 79,90</p>
                </div>
                <span class="discount">10% OFF</span>
              </div>
              <p class="installments">Ou em até <strong> 10x de R$ 7,90</strong></p>
              <button>Comprar</button>
        </div>
    `
}

const cardWidth = cards[0].offsetWidth + 983; // largura + gap
const maxIndex = dots.length - 1;
let currentIndex = 0;

function updateCarousel(index) {
  carousel.style.transform = `translateX(-${cardWidth * index}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  currentIndex = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => updateCarousel(index));
});

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    updateCarousel(currentIndex - 1);
  }
});

rightArrow.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    updateCarousel(currentIndex + 1);
  }
  
});
