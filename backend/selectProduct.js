const selectCategoria = document.getElementById("idcategory");
const conteinerMain = document.querySelector("section"); // onde estão os produtos

selectCategoria.addEventListener("change", () => {
  const categoriaSelecionada = selectCategoria.value;

  switch (categoriaSelecionada) {
    case "roupas":
      renderizarProdutos(["6", "7", "8", "9", "10"]);
      break;

    case "canecas":
      renderizarProdutos(["11", "12", "13", "14", "15"]);
      break;

    case "action_figure":
      renderizarProdutos(["16", "17", "18", "19", "20"]);
      break;

    default:
      renderizarProdutos([
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
      ]);
  }
});

function renderizarProdutos(ids) {
  const produtos = {
    6: {
      nome: "Roupa geek cubo magico",
      imagem: "../imgs/roupas/roupa_geek_cubo_magico.jpg",
      categoria: "Roupa",
      preco: "R$ 35,99",
    },
    7: {
      nome: "Roupa geek evolution",
      imagem: "../imgs/roupas/roupa_geek_evolution.jpg",
      categoria: "Roupa",
      preco: "R$ 35,99",
    },
    8: {
      nome: "Roupa geek pacman",
      imagem: "../imgs/roupas/roupa_geek_pacman.jpg",
      categoria: "Roupa",
      preco: "R$ 35,99",
    },
    9: {
      nome: "Roupa geek videogame controle",
      imagem: "../imgs/roupas/roupa_geek_videgame_controle.jpg",
      categoria: "Roupa",
      preco: "R$ 35,99",
    },
    10: {
      nome: "Roupa linha de codigo",
      imagem: "../imgs/roupas/roupa_linha_de_codigo.jpg",
      categoria: "Roupa",
      preco: "R$ 35,99",
    },
    11: {
      nome: "Caneca gamer boy geek",
      imagem: "../imgs/canecas/caneca_gamer_boy_geek.jpg",
      categoria: "Caneca",
      preco: "R$ 35,99",
    },
    12: {
      nome: "Caneca geek dev",
      imagem: "../imgs/canecas/caneca_geek_dev.jpg",
      categoria: "Caneca",
      preco: "R$ 35,99",
    },
    13: {
      nome: "Caneca geek quadrinho",
      imagem: "../imgs/canecas/caneca_geek_quadrinho.png",
      categoria: "Caneca",
      preco: "R$ 35,99",
    },
    14: {
      nome: "Caneca harry potter geek",
      imagem: "../imgs/canecas/caneca_harry_potter_geek.jpg",
      categoria: "Caneca",
      preco: "R$ 35,99",
    },
    15: {
      nome: "Ceneca geek game over",
      imagem: "../imgs/canecas/ceneca_geek_game_over.jpg",
      categoria: "Caneca",
      preco: "R$ 35,99",
    },
    16: {
      nome: "Action figure geek capitao",
      imagem: "../imgs/action_figures/action_figure_geek_capitao_america.png",
      categoria: "Action figure",
      preco: "R$ 35,99",
    },
    17: {
      nome: "Action figure geek homem aranha",
      imagem: "../imgs/action_figures/action_figure_geek_homem_aranha.jpg",
      categoria: "Action figure",
      preco: "R$ 35,99",
    },
    18: {
      nome: "Action figure god of war",
      imagem: "../imgs/action_figures/action_figure_god_of_war.png",
      categoria: "Action figure",
      preco: "R$ 35,99",
    },
    19: {
      nome: "Action figure sasori naruto",
      imagem: "../imgs/action_figures/action_figure_sasori_naruto.jpg",
      categoria: "Action figure",
      preco: "R$ 35,99",
    },
    20: {
      nome: "Action figure the witcher",
      imagem: "../imgs/action_figures/action_figure_the_witcher.png",
      categoria: "Action figure",
      preco: "R$ 35,99",
    },
  };

  conteinerMain.innerHTML = "";

  ids.forEach((id) => {
    const p = produtos[id];
    conteinerMain.innerHTML += `
      <div class="product-consteiner" data-id="${id}">
        <div class="conteiner-image-product">
          <img class="images-product" src="${p.imagem}" alt="${p.nome}">
        </div>
        <p class="category-product">${p.categoria}</p>
        <h2 class="names-product">${p.nome}</h2>
        <h6 class="prices-product">${p.preco}</h6>
      </div>
    `;
  });

  aplicarEventoClick();
}

function aplicarEventoClick() {
  const produtos = document.querySelectorAll(".product-consteiner");
  produtos.forEach((prod) => {
    prod.addEventListener("click", () => {
      const idProduto = prod.getAttribute("data-id");
      window.location.href = `/backend/products/products.html?id=${idProduto}`;
    });
  });
}

aplicarEventoClick();
