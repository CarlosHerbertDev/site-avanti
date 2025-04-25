export default function createCarousel(carouselContainer) {
    const carousel = carouselContainer.querySelector('.carousel');
    const dots = carouselContainer.querySelectorAll('.dot');
    const leftArrow = carouselContainer.querySelector('.arrow.left');
    const rightArrow = carouselContainer.querySelector('.arrow.right');
  
    // Cria os cards dinamicamente
    for (let index = 0; index < 14; index++) {
      carousel.innerHTML += `
        <div class="card">
          <span class="badge">NOVO</span>
          <img src="./src/assets/image-products.png" alt="Produto" />
          <h3 class="title-product">Lorem ipsum dolor sit amet consectetuer adipiscing elit</h3>
          <div class="values">
            <div class="prices">
              <p class="old-price">R$ 100,00</p>
              <p class="new-price">R$ 79,90</p>
            </div>
            <span class="discount">10% OFF</span>
          </div>
          <p class="installments">Ou em até <strong>10x de R$ 7,90</strong></p>
          <button>Comprar</button>
        </div>
      `;
    }
  
    const cards = carousel.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth + 1000; // ajuste conforme seu layout
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
  }