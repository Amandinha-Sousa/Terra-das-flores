function mostrarDetalhes(botao) {
  // Acessar o artigo correspondente ao botão clicado
  const artigo = botao.closest('.flor');
  
  // Encontrar o parágrafo para exibir os detalhes
  const detalhes = artigo.querySelector('.detalhes');
  
  // Acessar a informação dos dados da flor
  const info = artigo.getAttribute('data-info');
  
  // Verificar se os detalhes estão atualmente ocultos
  if (detalhes.style.display === "none" || detalhes.textContent === "") {
    // Exibir os detalhes
    detalhes.textContent = info; // Definindo o conteúdo da flor
    detalhes.style.display = "block"; // Tornar a seção visível
    botao.textContent = 'Detalhes vistos'; // Alterar o texto do botão
  } else {
    // Ocultar os detalhes
    detalhes.textContent = ""; // Limpar o conteúdo
    detalhes.style.display = "none"; // Tornar a seção invisível
    botao.textContent = 'Ver detalhes'; // Reverter o texto do botão
  }
}
