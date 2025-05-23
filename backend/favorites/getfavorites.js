document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("conteiner-favorite");
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  container.innerHTML = ""; // limpar o conteúdo anterior

  favoritos.forEach((produto, index) => {
    const div = document.createElement("div");
    div.classList.add("conteiner-favorite");

    div.innerHTML = `
        <img id="image-product" src="${produto.imagem}" alt="${produto.nome}" />
        <div class="conteiner-info">
          <h1 id="name-product">${produto.nome}</h1>
          <p id="price">${produto.preco}</p>
        </div>
        <button class="close-favorite" data-index="${index}">X</button>
      `;

    container.appendChild(div);
  });

  // Remover item dos favoritos
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-favorite")) {
      const index = e.target.dataset.index;
      favoritos.splice(index, 1);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      location.reload();
    }
  });

  const back = document.getElementById("backpage");

  if (back) {
    back.addEventListener("click", () => {
      const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

      // Redirecionar para o último favorito adicionado (ou o primeiro da lista, como preferir)
      if (favoritos.length > 0) {
        const ultimoProduto = favoritos[favoritos.length - 1];
        const id = ultimoProduto.id;

        // Redirecionar para a página do produto com base no id
        window.location.href = `/backend/products/products.html?id=${id}`;
      } else {
        // fallback caso não haja favoritos
        window.location.href = "/backend/products/products.html";
      }
    });
  }
});
