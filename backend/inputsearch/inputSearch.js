const inputSearch = document.getElementById("search_category");

inputSearch.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const valor = inputSearch.value.trim().toLowerCase();

    // Mapeamento dos possiveis textos
    const mapeamento = {
      roupa: "categoria-roupas",
      roupas: "categoria-roupas",
      caneca: "categoria-canecas",
      canecas: "categoria-canecas",
      "action figure": "categoria-action-figures",
      "action figures": "categoria-action-figures",
      figura: "categoria-action-figures",
      figuras: "categoria-action-figures",
    };

    const idAlvo = mapeamento[valor];

    if (idAlvo) {
      const elemento = document.getElementById(idAlvo);
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      alert("Categoria não encontrada!");
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const inputSearch = document.getElementById("search_category");
  const selectCategoria = document.getElementById("idcategory");

  inputSearch.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const valor = inputSearch.value.trim().toLowerCase();

      const mapeamento = {
        roupa: "roupas",
        roupas: "roupas",
        caneca: "canecas",
        canecas: "canecas",
        "action figure": "action_figure",
        "action figures": "action_figure",
        figura: "action_figure",
        figuras: "action_figure",
        todos: "categorias",
        geral: "categorias",
      };

      const categoriaSelecionada = mapeamento[valor];

      if (categoriaSelecionada) {
        selectCategoria.value = categoriaSelecionada;
        selectCategoria.dispatchEvent(new Event("change"));
      } else {
        alert("Categoria não encontrada!");
      }
    }
  });
});
