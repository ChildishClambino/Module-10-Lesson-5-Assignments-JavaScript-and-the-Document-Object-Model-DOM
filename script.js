let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// A function to display the product information on the webpage dynamically
function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; 

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<strong>${product.name}</strong><br>Price: $${product.price}<br>${product.description}<br><br>`;
        productList.appendChild(productDiv);
    });
}

// Event listener to trigger the display of products when the page loads
window.addEventListener('load', displayProducts);