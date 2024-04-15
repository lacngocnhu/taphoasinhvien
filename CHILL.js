// Mock data
const productsData = [
  {
    name: "Bột giặt Omo Comfort 700g",
    image:
      "https://lzd-img-global.slatic.net/g/p/32ef3d378151df5eb48197c47901f2e7.jpg_550x550.jpg",
    price: 32000,
    quantity: 0,
  },
  {
    name: "Combo 30 khẩu trang 5D Thịnh Phát (trắng)",
    image:
      "https://vn-test-11.slatic.net/p/7fdc5e6f7a1d53faf36432c2536d19b6.jpg",
    price: 10000,
    quantity: 0,
  },
  {
    name: "Combo 30 khẩu trang 5D Thịnh Phát (trắng)",
    image:
      "https://vn-test-11.slatic.net/p/7fdc5e6f7a1d53faf36432c2536d19b6.jpg",
    price: 10000,
    quantity: 0,
  },
  {
    name: "Combo 30 khẩu trang 5D Thịnh Phát (trắng)",
    image:
      "https://vn-test-11.slatic.net/p/7fdc5e6f7a1d53faf36432c2536d19b6.jpg",
    price: 10000,
    quantity: 0,
  },

  // Thêm sản phẩm khác tương tự
];

// Function to display products
function displayProducts() {
  const productsSection = document.getElementById("products");

  productsData.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Giá: ${product.price} VNĐ</p>
            <p>Số lượng: <span id="${product.name.replace(
              /\s+/g,
              "-"
            )}-quantity">${product.quantity}</span></p>
            <button onclick="addToCart('${
              product.name
            }')">Thêm vào giỏ hàng</button>
            <div class="quantity-buttons">
                <button onclick="decreaseQuantity('${product.name}')">-</button>
                <button onclick="increaseQuantity('${product.name}')">+</button>
            </div>
        `;

    productsSection.appendChild(productDiv);
  });
}

// Function to add product to cart
function addToCart(productName) {
  // Thêm logic thêm sản phẩm vào giỏ hàng ở đây
  alert(`Đã thêm ${productName} vào giỏ hàng.`);
}

// Function to decrease quantity
function decreaseQuantity(productName) {
  const quantitySpan = document.getElementById(
    `${productName.replace(/\s+/g, "-")}-quantity`
  );
  let currentQuantity = parseInt(quantitySpan.textContent);
  if (currentQuantity > 0) {
    currentQuantity--;
    quantitySpan.textContent = currentQuantity;
  }
}

// Function to increase quantity
function increaseQuantity(productName) {
  const quantitySpan = document.getElementById(
    `${productName.replace(/\s+/g, "-")}-quantity`
  );
  let currentQuantity = parseInt(quantitySpan.textContent);
  currentQuantity++;
  quantitySpan.textContent = currentQuantity;
}

// Display products when page loads
window.onload = displayProducts;

// Function to search products
function searchProducts() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filteredProducts = productsData.filter((product) => {
    // So sánh tên sản phẩm với từ khóa tìm kiếm
    return product.name.toLowerCase().includes(searchInput);
  });

  // Hiển thị danh sách sản phẩm đã lọc
  displayFilteredProducts(filteredProducts);
}

// Function to display filtered products
function displayFilteredProducts(filteredProducts) {
  const productsSection = document.getElementById("products");
  productsSection.innerHTML = ""; // Xóa sản phẩm hiện tại

  filteredProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Giá: ${product.price} VNĐ</p>
            <p>Số lượng: <span id="${product.name.replace(
              /\s+/g,
              "-"
            )}-quantity">${product.quantity}</span></p>
            <button onclick="addToCart('${
              product.name
            }')">Thêm vào giỏ hàng</button>
            <div class="quantity-buttons">
                <button onclick="decreaseQuantity('${product.name}')">-</button>
                <button onclick="increaseQuantity('${product.name}')">+</button>
            </div>
        `;

    productsSection.appendChild(productDiv);
  });
}

// Function to search products when user hits Enter key
function searchOnEnter(event) {
  if (event.key === "Enter") {
    searchProducts();
  }
}
