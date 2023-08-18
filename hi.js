// Sample product data (you can replace this with your actual product data)
const productsData = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 20.99 },
    { id: 3, name: "Product 3", price: 15.49 },
    // ... add more products
];

const productsContainer = document.getElementById("products");
const cartItemsContainer = document.getElementById("cart-items");
const checkoutButton = document.getElementById("checkout-btn");

// Display products on the page
function displayProducts() {
    productsData.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Add a product to the cart
function addToCart(productId) {
    const selectedProduct = productsData.find(product => product.id === productId);
    if (selectedProduct) {
        const cartItem = document.createElement("li");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <span>${selectedProduct.name}</span>
            <span>$${selectedProduct.price.toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(cartItem);
    }
}

// Add event listener to product buttons
productsContainer.addEventListener("click", event => {
    if (event.target.classList.contains("add-to-cart-btn")) {
        const productId = parseInt(event.target.getAttribute("data-id"));
        addToCart(productId);
    }
});

// Initialize the page
displayProducts();
