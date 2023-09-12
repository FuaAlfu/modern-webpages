// Dummy product data (you can replace this with your own data)
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 10,
        image: "product1.jpg",
    },
    {
        id: 2,
        name: "Product 2",
        price: 20,
        image: "product2.jpg",
    },
    {
        id: 3,
        name: "Product 3",
        price: 30,
        image: "product3.jpg",
    },
];

const productsSection = document.getElementById("products");
const cartCount = document.getElementById("cart-count");
let cartItemCount = 0;

// Function to add a product to the cart
function addToCart(product) {
    cartItemCount++;
    cartCount.textContent = cartItemCount;
}

// Function to remove a product from the cart
function removeFromCart(product) {
    if (cartItemCount > 0) {
        cartItemCount--;
        cartCount.textContent = cartItemCount;
    }
}

// Function to create and display product items
function createProductItems() {
    products.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement("div");
        productName.textContent = product.name;

        const productPrice = document.createElement("div");
        productPrice.textContent = `$${product.price}`;

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", () => addToCart(product));

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productItem.appendChild(addToCartButton);

        productsSection.appendChild(productItem);
    });
}

// Call the function to populate the products
createProductItems();
