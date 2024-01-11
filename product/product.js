document
  .querySelector(".wrapper")
  .insertAdjacentHTML("afterbegin", renderHeader(checkLogin()));
document
  .querySelector(".wrapper")
  .insertAdjacentHTML("beforeend", renderFooter());
function createDetail(products) {
  return `<div class="petFootdies-product-detail">
                  <div class="petFootdies-img-block">
                    <img
                      src="${products.image}"
                      alt=""
                      class="petFootdies-img"
                    />
                  </div>
                  <p class="petFootdies-product-name">${products.name}</p>
                  <div class="petFootdies-product-rating">
                    <div class="petFootdies-product-rating-img">
                      <img src="../img/rating.png" alt="" />
                      <img src="../img/rating.png" alt="" />
                      <img src="../img/rating.png" alt="" />
                      <img src="../img/rating.png" alt="" />
                      <img src="../img/rating.png" alt="" />
                    </div>
                    <p class="petFootdies-product-rating-number">5.0</p>
                  </div>
                  <div class="petFootdies-product-price">${products.price}</div>
                  <div class="petFootdies-product-last">
                    <button onclick="addtoCart('${products.id}')" class="petFootdies-product-addTocard">
                      ADD TO CARD
                    </button>
                    <img
                      class="petFootdies-product-addTocard-heart"
                      src="../img/addTocard-heart.png"
                      alt=""
                    />
                  </div>
                </div>`;
}
let productInCart = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];
function renderProducts(productList) {
  let productContainer = document.querySelector(".petFootdies-product");
  productContainer.innerHTML = "";

  for (let i = 0; i < productList.length; i++) {
    let productDetail = createDetail(productList[i]);
    productContainer.innerHTML += productDetail;
  }
}
window.addEventListener("load", function () {
  renderShoppingCart();
  updateCartItemCount();
});
function addtoCart(id) {
  if (!localStorage.getItem("token")) {
    alert("Vui lòng đăng nhập để mua hàng");
  }
  let currentUser = decodeToken(localStorage.getItem("token")).data;
  console.log(currentUser);
  let usersCSDL = JSON.parse(localStorage.getItem("users"));
  console.log("usersCSDL", usersCSDL);
  let user = usersCSDL.find((user) => user.id === currentUser.id);
  if (!user) {
    alert("Người dùng không tồn tại");
  }
  let existingProduct = user.cart.find((product) => product.id === id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    let newCart = {
      id,
      quantity: 1,
    };
    user.cart.push(newCart);
  }
  localStorage.setItem("users", JSON.stringify(usersCSDL));
  updateCartItemCount();
  renderShoppingCart();
}
if (!localStorage.getItem("products")) {
  let products = [
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Grey hoodie",
      image: "../img/petClothing-greyHoodie.png",
      price: "18.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Happy jeans pant",
      image: "../img/petClothing-happyJeans.png",
      price: "19.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Tight half t-shirt",
      image: "../img/petClothing-tihgtHalf.png",
      price: "20.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Grey hoodie fashion",
      image: "../img/petClothing-blackThick.png",
      price: "20.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Fress Kisses",
      image: "../img/petFoodies-fressKisses.png",
      price: "18.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Black Dog",
      image: "../img/petFoodies-blackDog.png",
      price: "18.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Pulsitos Candy",
      image: "../img/petFoodies-pulsitosCandy.png",
      price: "18.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Yelloww Dog",
      image: "../img/petFoodies-yellowDog.png",
      price: "18.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Foot Eat",
      image: "../img/petFoodies-foot.png",
      price: "18.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Love Corn",
      image: "../img/petFoodies-loveCorn.png",
      price: "18.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "All Dog",
      image: "../img/petFoodies-allDog.png",
      price: "18.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Coconut Candy",
      image: "../img/petFoodies-coconutCandy.png",
      price: "18.00",
    },
  ];
  localStorage.setItem("products", JSON.stringify(products));
}
let productList = JSON.parse(localStorage.getItem("products"));
renderProducts(productList);

function getProductName(productId) {
  let products = JSON.parse(localStorage.getItem("products"));
  let product = products.find((product) => product.id === productId);
  return product ? product.name : "Unknown Product";
}

function getProductImage(productId) {
  let products = JSON.parse(localStorage.getItem("products"));
  let product = products.find((product) => product.id === productId);
  return product ? product.image : "default-image-url";
}

function getProductPrice(productId) {
  let products = JSON.parse(localStorage.getItem("products"));
  let product = products.find((product) => product.id === productId);
  return product ? `$${product.price}` : "$0.00";
}
function getProductById(productId) {
  let productData = JSON.parse(localStorage.getItem("products"));
  let product = productData.find((productItem) => productItem.id === productId);
  return product;
}
function createCartItem(cartItem) {
  let product = getProductById(cartItem.id);
  // Tính tổng giá
  let total = cartItem.quantity * product.price;
  return `
    <div class="cart-item">
      <img src="${getProductImage(cartItem.id)}" alt="" />
      <div class="product-name">${getProductName(cartItem.id)}</div>
      <div class="totalPrice">${getProductPrice(cartItem.id)}</div>
      <div class="cart-quantity">
        <span class="increaseProduct" onclick="increaseQuantity('${
          cartItem.id
        }')">+</span>
        <span class="product-quantity">${cartItem.quantity}</span>
        <span class="reduceProduct" onclick="reduceQuantity('${
          cartItem.id
        }')">-</span>
      </div>
       <div class="totalPrice">${total.toFixed(2)}</div> 
       <div></div>
       <div></div>
       <span class = "deleteProduct" onclick = "deleteProduct('${
         cartItem.id
       }')">delete</span>
    </div>
  `;
}

function renderShoppingCart() {
  let cartContainer = document.getElementById("cartContainer");
  let totalContainer = document.getElementById("totalContainer");
  cartContainer.innerHTML = "";
  let productData = JSON.parse(localStorage.getItem("users"));
  let currentUser = decodeToken(localStorage.getItem("token")).data;
  let currentUserData = productData.find((user) => user.id === currentUser.id);
  console.log("currentData", currentUserData);
  if (currentUserData && currentUserData.cart) {
    currentUserData.cart.forEach((cartItem) => {
      let cartItemHTML = createCartItem(cartItem);
      cartContainer.innerHTML += cartItemHTML;
    });
  }

  let total = calculateTotalPrice();
  totalContainer.innerText = `Tổng tiền của bạn là: $${total}`;
}

function calculateTotalPrice() {
  let productData = JSON.parse(localStorage.getItem("users"));
  let currentUser = decodeToken(localStorage.getItem("token")).data;
  let currentUserData = productData.find((user) => user.id === currentUser.id);
  let total = 0;

  if (currentUserData) {
    currentUserData.cart.forEach((cartItem) => {
      let product = getProductById(cartItem.id);
      if (product) {
        total += cartItem.quantity * parseFloat(product.price);
      }
    });
  }

  return total.toFixed(2);
}
function increaseQuantity(productId) {
  let productData = JSON.parse(localStorage.getItem("users"));
  let currentUser = decodeToken(localStorage.getItem("token")).data;
  let user = productData.find((user) => user.id === currentUser.id);
  let cartItem = user.cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity += 1;
    localStorage.setItem("users", JSON.stringify(productData));
    updateCartItemCount();
    renderShoppingCart();
  }
}

function reduceQuantity(productId) {
  let productData = JSON.parse(localStorage.getItem("users"));
  let currentUser = decodeToken(localStorage.getItem("token")).data;
  let user = productData.find((user) => user.id === currentUser.id);
  let cartItem = user.cart.find((item) => item.id === productId);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity -= 1;
    localStorage.setItem("users", JSON.stringify(productData));
    updateCartItemCount();
    renderShoppingCart();
  }
}
function deleteProduct(productId) {
  let productData = JSON.parse(localStorage.getItem("users"));
  let currentUser = decodeToken(localStorage.getItem("token")).data;
  let user = productData.find((user) => user.id === currentUser.id);
  user.cart = user.cart.filter((item) => item.id !== productId);
  localStorage.setItem("users", JSON.stringify(productData));
  updateCartItemCount();
  renderShoppingCart();
}
function updateCartItemCount() {
  let productData = JSON.parse(localStorage.getItem("users"));
  let currentUser = decodeToken(localStorage.getItem("token")).data;
  let user = productData.find((user) => user.id === currentUser.id);
  let cartItemCount = user.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  console.log("so luong san pham", cartItemCount);
  let cartItemCountshow = document.getElementById("cartItemCount");
  cartItemCountshow.textContent = cartItemCount.toString();
  if (!localStorage.getItem("cartItemCount")) {
    localStorage.setItem("cartItemCount", cartItemCount.toString());
  }

  renderShoppingCart();
}
renderShoppingCart();
