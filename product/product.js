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
//hàm gọi sản phẩm từ local và add sản phẩm vào form
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
  // Cập nhật hiển thị giỏ hàng khi trang được nạp lại
  renderShoppingCart();
});
function addtoCart(id) {
  //chắc chắn người dùng đã đăng nhập
  if (!localStorage.getItem("token")) {
    alert("Vui lòng đăng nhập để mua hàng");
  }
  //Lấy token về để xác định tài khoản đang đăng nhập
  let currentUser = decodeToken(localStorage.getItem("token"));
  //Lấy toàn bộ người dùng từ CSDL
  let usersCSDL = JSON.parse(localStorage.getItem("users"));
  //Tìm người dùng đang đăng nhập trong CSDL bằng id có trong token
  let user = usersCSDL.find((user) => user.id === currentUser.id);
  if (!user) {
    alert("Người dùng không tồn tại ");
  }
  //tìm kiếm trong giỏ hàng của người dùng xem đã có sản phẩm này chưa
  let existingProduct = user.cart.find((product) => product.id === id);
  //nếu đã tồn tại, thì tăng số lượng lên 1
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    //nếu không tồn tại, thì thêm sản phẩm đó vào giỏ hàng và để quantity = 1
    let newCart = {
      id,
      quantity: 1,
    };
    user.cart.push(newCart);
  }
  renderShoppingCart();
  localStorage.setItem("users", JSON.stringify(usersCSDL));
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
    </div>
  `;
}

function renderShoppingCart() {
  let cartContainer = document.getElementById("cartContainer");
  let totalContainer = document.getElementById("totalContainer");
  cartContainer.innerHTML = "";
  let cartData = JSON.parse(localStorage.getItem("users"));
  if (cartData) {
    cartData.forEach((user) => {
      user.cart.forEach((cartItem) => {
        let cartItemHTML = createCartItem(cartItem);
        cartContainer.innerHTML += cartItemHTML;
      });
    });
  }
  let total = calculateTotalPrice();
  totalContainer.innerText = `Tổng tiền của bạn là:  $${total}`;
}

function calculateTotalPrice() {
  let cartData = JSON.parse(localStorage.getItem("users"));
  let total = 0;

  if (cartData) {
    cartData.forEach((user) => {
      user.cart.forEach((cartItem) => {
        let product = getProductById(cartItem.id);
        if (product) {
          total += cartItem.quantity * parseFloat(product.price);
        }
      });
    });
  }

  return total.toFixed(2); // Giữ hai chữ số sau dấu thập phân
}
// function increaseQuantity(productId) {
//   let userCSDL = JSON.parse(localStorage.getItem("users"));
//   console.log(userCSDL);
//   console.log(productId);
//   return;
// }
// function reduceQuantity(productId) {
//   // Implement logic to reduce the quantity of a product in the cart
// }

// renderShoppingCart();
