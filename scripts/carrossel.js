// Carrossel JavaScript
const carrosselContainer = document.querySelector('.grade-categorias');
let currentPosition = 0;
const itemWidth = 240; // Considerando a largura de 200px + margem de 40px total
const visibleItems = 4; 
const totalItems = carrosselContainer.children.length;
const maxPosition = -(itemWidth * (totalItems - visibleItems));

// Função para mover o carrossel para frente
const moveNext = () => {
  if (currentPosition > maxPosition) {
    currentPosition -= itemWidth;
    carrosselContainer.style.transform = `translateX(${currentPosition}px)`;
  } else {
    currentPosition = 0; // Volta ao início quando atinge o final
    carrosselContainer.style.transform = `translateX(${currentPosition}px)`;
  }
  atualizarIndicadores();
};

// Função para mover o carrossel para trás
const movePrev = () => {
  if (currentPosition < 0) {
    currentPosition += itemWidth;
    carrosselContainer.style.transform = `translateX(${currentPosition}px)`;
  } else {
    currentPosition = maxPosition; // Vai para o final quando está no começo
    carrosselContainer.style.transform = `translateX(${currentPosition}px)`;
  }
  atualizarIndicadores();
};

// Função para mover o carrossel automaticamente a cada 6 segundos
setInterval(() => {
  moveNext();
}, 4000);
