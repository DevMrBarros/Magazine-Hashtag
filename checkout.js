import {
  catalogo,
  desenharProdutoCarrinhoSimples,
  lerLocalStorage,
  apagarDoLocalStorage,
  salvarLocalStorage,
} from "./src/utilidades";

// Função para calcular o valor total dos produtos no carrinho
function calcularValorTotal() {
  // Lê os IDs e quantidades dos produtos salvos no localStorage ou inicializa como um objeto vazio
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  let valorTotal = 0;

  // Itera sobre os produtos no carrinho para calcular o valor total
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    const quantidade = idsProdutoCarrinhoComQuantidade[idProduto];
    const produto = catalogo.find((p) => p.id === idProduto);
    if (produto) {
      valorTotal += quantidade * produto.preco; // Multiplica a quantidade pelo preço do produto
    }
  }

  return valorTotal; // Retorna o valor total calculado
}

// Função para desenhar os produtos no checkout
function desenharProdutosCheckout() {
  // Lê os IDs e quantidades dos produtos salvos no localStorage ou inicializa como um objeto vazio
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

  // Itera sobre os produtos no carrinho para desenhá-los no checkout
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoCarrinhoSimples(
      idProduto,
      "container-produtos-checkout",
      idsProdutoCarrinhoComQuantidade[idProduto]
    );
  }

  // Calcula o valor total dos produtos no checkout
  const valorTotal = calcularValorTotal();

  // Atualiza o elemento HTML com o valor total calculado
  const precoTotalElement = document.getElementById("preco-total");
  if (precoTotalElement) {
    precoTotalElement.textContent = `Total: $${valorTotal}`;
  }
}

// Função para finalizar a compra
function finalizarCompra(evento) {
  evento.preventDefault(); // Evita o comportamento padrão do formulário

  // Lê os IDs e quantidades dos produtos salvos no localStorage ou inicializa como um objeto vazio
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

  // Verifica se há produtos no carrinho antes de finalizar a compra
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return; // Sai da função se não houver produtos no carrinho
  }

  // Cria um objeto representando o pedido feito
  const dataAtual = new Date();
  const pedidoFeito = {
    dataPedido: dataAtual,
    pedido: idsProdutoCarrinhoComQuantidade,
  };

  // Lê o histórico de pedidos salvos no localStorage ou inicializa como um array vazio
  const historicoDePedidos = lerLocalStorage("historico") ?? [];
  
  // Adiciona o pedido atual ao histórico de pedidos
  const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];

  // Salva o histórico de pedidos atualizado no localStorage
  salvarLocalStorage("historico", historicoDePedidosAtualizado);
  
  // Apaga o carrinho do localStorage após finalizar a compra
  apagarDoLocalStorage("carrinho");

  // Redireciona para a página de pedidos após finalizar a compra
  window.location.href = "./pedidos.html";
}

// Chama a função para desenhar os produtos no checkout ao carregar a página
desenharProdutosCheckout();

// Adiciona um listener para o evento de submit do formulário (finalizar compra)
document.addEventListener("submit", (evt) => finalizarCompra(evt));
