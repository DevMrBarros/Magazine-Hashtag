// Importa o catálogo de produtos e a função para adicionar ao carrinho
import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

/**
 * Função para renderizar o catálogo de produtos na página.
 */
export function renderizarCatalogo() {
  // Itera sobre cada produto no catálogo
  for (const produtoCatalogo of catalogo) {
    // Cria o HTML para o cartão de produto com base nos dados do produto
    const cartaoProduto = `<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produtoCatalogo.feminino ? "feminino" : "masculino"
      }' id="card-produto-${produtoCatalogo.id}">
        <img
        src="./assets/img/${produtoCatalogo.imagem}"
        alt="Produto 1 do Magazine Hashtag."
        class='group-hover:scale-110 duration-300 my-3 rounded-lg'
        />
        <p class='text-sm'>${produtoCatalogo.marca}</p>
        <p class='text-sm'>${produtoCatalogo.nome}</p>
        <p class='text-sm'>$${produtoCatalogo.preco}</p>
        <button id='adicionar-${produtoCatalogo.id
      }' class='bg-slate-950 hover:bg-slate-700 text-slate-200'
        ><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;

    // Adiciona o HTML do cartão de produto ao elemento container-produto na página
    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  // Adiciona event listeners para os botões "Adicionar ao Carrinho" de cada produto
  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }
}
