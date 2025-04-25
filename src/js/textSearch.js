export default function textSearch() {
    const lupa = document.getElementById('lupa')
const input = document.getElementById('searchInput')
const result = document.getElementById('search-result')

lupa.addEventListener("click", () => {
  const searchTerm  = input.value.trim();
  if (searchTerm  !== "") {
    result.textContent = `Você buscou por: '${searchTerm}'`;
    result.style.display = "block";
  } else {
    result.innerHTML = ''
    result.style.display = "none";
  }
}); 

input.addEventListener('change', (e) => {
  if(e.target.value === '') {
    result.innerHTML = ''
    result.style.display = "none";
  }
})

input.addEventListener('keyup', (e) => {
  const searchTerm = e.target.value
  const key = e.which || e.keyCode
  const isEnterKeyPressed = key === 13
      if(isEnterKeyPressed) {
          if (searchTerm){
            result.textContent = `Você buscou por: '${searchTerm}'`;
            result.style.display = "block";
          } else {
            result.innerHTML = ''
            result.style.display = "none";
          }
      }
  })
}