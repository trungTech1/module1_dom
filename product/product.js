document
  .querySelector(".wrapper")
  .insertAdjacentHTML("afterbegin", renderHeader(checkLogin()));
document
  .querySelector(".wrapper")
  .insertAdjacentHTML("beforeend", renderFooter());
// lưu sản phẩn vào local và gọi, hiển thị sản phẩm
if (!localStorage.getItem("products")) {
  let products = [
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Grey hoodie",
      image: "../img/petClothing-greyHoodie.png",
      price: "$18.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Happy jeans pant",
      image: "../img/petClothing-happyJeans.png",
      price: "$19.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Tight half t-shirt",
      image: "../img/petClothing-tihgtHalf.png",
      price: "$20.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Grey hoodie fashion",
      image: "../img/petClothing-blackThick.png",
      price: "$20.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Fress Kisses",
      image: "../img/petFoodies-fressKisses.png",
      price: "$18.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Black Dog",
      image: "../img/petFoodies-blackDog.png",
      price: "$18.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Pulsitos Candy",
      image: "../img/petFoodies-pulsitosCandy.png",
      price: "$18.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Yelloww Dog",
      image: "../img/petFoodies-yellowDog.png",
      price: "$18.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Foot Eat",
      image: "../img/petFoodies-foot.png",
      price: "$18.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Love Corn",
      image: "../img/petFoodies-loveCorn.png",
      price: "$18.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "All Dog",
      image: "../img/petFoodies-allDog.png",
      price: "$18.00",
    },
    {
      id: "product" + Math.ceil(Date.now() * Math.random()),
      name: "Coconut Candy",
      image: "../img/petFoodies-coconutCandy.png",
      price: "$18.00",
    },
  ];
  localStorage.setItem("products", JSON.stringify(products));
}

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
                    <button onclick= "addtoCart('${products.id}')" class="petFootdies-product-addTocard">
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
function addDetail(products) {
  let listProduct = document.querySelector(".petFootdies-product");
  listProduct.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    let newProduct = createDetail(products[i]);
    listProduct.innerHTML += newProduct;
  }
}
let products = JSON.parse(localStorage.getItem("products"));
addDetail(products);
function addtoCart(id) {
  //chắc chắn người dùng đã đăng nhập
  if (!localStorage.getItem("token")) {
    alert("Vui lòng đăng nhập để mua hàng");
  }
  //Lấy token về để xác định tài khoản đang đăng nhập
  let currentUser = decodeToken(localStorage.getItem("token"));
  console.log("datauser", currentUser);

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
    existingProduct.quantyti += 1;
  } else {
    //nếu không tồn tại, thì thêm sản phẩm đó vào giỏ hàng và để quantity = 1
    let newCart = {
      id,
      quantyti: 1,
    };
    user.cart.push(newCart);
  }
  localStorage.setItem("users", JSON.stringify(usersCSDL));
}
