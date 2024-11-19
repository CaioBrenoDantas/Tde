const indicadores = document.querySelectorAll('.carrossel-indicadores .indicador');

// Função para atualizar os indicadores
const atualizarIndicadores = () => {
  const index = Math.abs(currentPosition / itemWidth);
  indicadores.forEach((indicador, i) => {
    if (i === index) {
      indicador.classList.add('ativo');
    } else {
      indicador.classList.remove('ativo');
    }
  });
};

// Tornar os indicadores clicáveis
indicadores.forEach(indicador => {
  indicador.addEventListener('click', () => {
    const index = parseInt(indicador.getAttribute('data-index'));
    currentPosition = -itemWidth * index;
    carrosselContainer.style.transform = `translateX(${currentPosition}px)`;
    atualizarIndicadores();
  });
});
