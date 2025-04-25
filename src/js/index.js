import createMegaMenus from "./createMegaMenus.js";
import createCarousel from "./corrousel.js"
import textSearch from "./textSearch.js"

createMegaMenus()
textSearch()

document.querySelectorAll('.section-lancamentos').forEach(carouselSection => {
  createCarousel(carouselSection);
});
