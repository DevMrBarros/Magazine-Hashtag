// Obtém o elemento que contém o catálogo de produtos
const catalogoProdutos = document.getElementById("container-produto");

/**
 * Função para exibir todos os produtos no catálogo.
 */
function exibirTodos() {
  // Obtém todos os produtos atualmente escondidos no catálogo
  const produtosEscondidos = Array.from(
    catalogoProdutos.getElementsByClassName("hidden")
  );

  // Remove a classe "hidden" de todos os produtos escondidos para exibi-los
  for (const produto of produtosEscondidos) {
    produto.classList.remove("hidden");
  }
}

/**
 * Função para esconder produtos masculinos no catálogo.
 */
function esconderMasculinos() {
  // Exibe todos os produtos para garantir que nenhum esteja escondido inicialmente
  exibirTodos();

  // Obtém todos os produtos masculinos do catálogo
  const produtosMasculinos = Array.from(
    catalogoProdutos.getElementsByClassName("masculino")
  );

  // Adiciona a classe "hidden" a todos os produtos masculinos para escondê-los
  for (const produto of produtosMasculinos) {
    produto.classList.add("hidden");
  }
}

/**
 * Função para esconder produtos femininos no catálogo.
 */
function esconderFemininos() {
  // Exibe todos os produtos para garantir que nenhum esteja escondido inicialmente
  exibirTodos();

  // Obtém todos os produtos femininos do catálogo
  const produtosFemininos = Array.from(
    catalogoProdutos.getElementsByClassName("feminino")
  );

  // Adiciona a classe "hidden" a todos os produtos femininos para escondê-los
  for (const produto of produtosFemininos) {
    produto.classList.add("hidden");
  }
}

/**
 * Função para inicializar os filtros do catálogo.
 * Adiciona event listeners aos botões de filtro.
 */
export function inicializarFiltros() {
  document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
  document
    .getElementById("exibir-masculinos")
    .addEventListener("click", esconderFemininos);
  document
    .getElementById("exibir-femininos")
    .addEventListener("click", esconderMasculinos);
}
