// Importando funções e módulos necessários do seu projeto
import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import {
  atualizarPrecoCarrinho,
  inicializarCarrinho,
  renderizarProdutosCarrinho,
} from "./src/menuCarrinho";

// Renderiza o catálogo de produtos na página
renderizarCatalogo();

// Inicializa o carrinho de compras
inicializarCarrinho();

// Renderiza os produtos no carrinho de compras
renderizarProdutosCarrinho();

// Atualiza o preço total no carrinho de compras
atualizarPrecoCarrinho();

// Inicializa os filtros do catálogo
inicializarFiltros();
