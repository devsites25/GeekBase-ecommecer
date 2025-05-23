document.addEventListener("DOMContentLoaded", () => {
  const addFavoriteBtn = document.getElementById("add_favorete");

  if (addFavoriteBtn) {
    addFavoriteBtn.addEventListener("click", () => {
      // Pegar os dados do produto atual da página
      const nome = document.getElementById("nome-produto").textContent;
      const preco = document.getElementById("preco-produto").textContent;
      const imagem = document
        .getElementById("imagem-produto")
        .getAttribute("src");

      // Criar objeto do produto
      const produto = { nome, preco, imagem };

      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

      // checa se já existe pelo nome
      const jaExiste = favoritos.some((product) => product.nome === nome);
      if (!jaExiste) {
        favoritos.push(produto);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
      }

      window.location.href = "/backend/favorites/favorites.html";
    });
  }
});
