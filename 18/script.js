// script.js
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById("product-list");
            data.forEach(product => {
                const div = document.createElement("div");
                div.className = "product";
                div.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <p>${product.name}</p>
                    <p>Price: $${product.price}</p>
                `;
                productList.appendChild(div);
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});
