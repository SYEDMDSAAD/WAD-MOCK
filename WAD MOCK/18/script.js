document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3000/api/products")
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById("productList");
            products.forEach(product => {
                let productCard = `<div class="product">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                </div>`;
                productList.innerHTML += productCard;
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});
