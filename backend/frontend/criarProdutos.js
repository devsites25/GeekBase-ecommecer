const products = document.getElementsByClassName("product-consteiner");

for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", function () {
    const productId = this.getAttribute("data-id");
    if (productId) {
      window.location.href = `/backend/frontend/products/products.html?id=${productId}`;
    }
  });
}
