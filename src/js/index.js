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

const cardWidth = cards[0].offsetWidth + 1246; // largura + gap
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
