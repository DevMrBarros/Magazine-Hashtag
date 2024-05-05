import {
  lerLocalStorage,
  desenharProdutoCarrinhoSimples,
} from "./src/utilidades";

// import { limparLocalStore } from "./limparLocalStorage";

// Função para criar e renderizar o histórico de pedidos
function criarPedidoHistorico(pedidoComData) {
  // Cria um elemento HTML representando o pedido com sua data
  const elementoPedido = `<p class='text-xl text-bold my-4' >${new Date(
    pedidoComData.dataPedido
  ).toLocaleDateString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })}</p>
    <section id='container-pedidos-${pedidoComData.dataPedido
    }' class='bg-slate-300 p-3 rounded-md' ></section>
    `;
  // Adiciona o elemento pedido ao final da página principal
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML += elementoPedido;

  // Desenha cada produto do pedido dentro do seu respectivo container
  for (const idProduto in pedidoComData.pedido) {
    desenharProdutoCarrinhoSimples(
      idProduto,
      `container-pedidos-${pedidoComData.dataPedido}`,
      pedidoComData.pedido[idProduto]
    );
  }
}

// Função para renderizar o histórico de pedidos
function renderizarHistoricoPedidos() {
  // Lê o histórico de pedidos do localStorage
  const historico = lerLocalStorage("historico");

  // Itera sobre cada pedido no histórico para criar e renderizar
  for (const pedidoComData of historico) {
    criarPedidoHistorico(pedidoComData);
  }
}

// Chama a função para renderizar o histórico de pedidos ao carregar a página
renderizarHistoricoPedidos();
