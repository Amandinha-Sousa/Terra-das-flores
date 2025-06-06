const botoes = document.querySelectorAll('.flor button');
const infoFlor = document.getElementById('infoFlor');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const flor = botao.parentElement;
    const nome = flor.getAttribute('data-nome');
    const info = flor.getAttribute('data-info');

    infoFlor.textContent = `${nome}: ${info}`;
  });
});
