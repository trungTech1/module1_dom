document
  .querySelector(".wrapper")
  .insertAdjacentHTML("afterbegin", renderHeader(checkLogin()));
document
  .querySelector(".wrapper")
  .insertAdjacentHTML("beforeend", renderFooter());
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
                    <button class="petFootdies-product-addTocard">
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
// function addCart(productName) {
//   console.log(productName);
// }

// function createDetail(product) {
//   return `
//        <div class="petFootdies-product-detail">
//                   <div class="petFootdies-img-block">
//                     <img
//                       src="${product.img}"
//                       alt=""
//                       class="petFootdies-img"
//                     />
//                   </div>
//                   <p class="petFootdies-product-name">${product.title}</p>
//                   <div class="petFootdies-product-rating">
//                     <div class="petFootdies-product-rating-img">
//                       <img src="../img/rating.png" alt="" />
//                       <img src="../img/rating.png" alt="" />
//                       <img src="../img/rating.png" alt="" />
//                       <img src="../img/rating.png" alt="" />
//                       <img src="../img/rating.png" alt="" />
//                     </div>
//                     <p class="petFootdies-product-rating-number">5.0</p>
//                   </div>
//                   <div class="petFootdies-product-price">$18.00</div>
//                   <div class="petFootdies-product-last">
//                     <button onclick="addCart('${product.id}')" class="petFootdies-product-addTocard">
//                       ADD TO CARD
//                     </button>
//                     <img
//                       class="petFootdies-product-addTocard-heart"
//                       src="../img/addTocard-heart.png"
//                       alt=""
//                     />
//                   </div>
//                 </div>`;
// }

// function addDetail(products) {
//   const containerEl = document.querySelector(".petFootdies-product");
//   products.forEach((product) => {
//     const newDetail = createDetail(product);
//     containerEl.innerHTML += newDetail;
//   });
// }

// if (!localStorage.getItem("products")) {
//   let sampleProducts = [
//     {
//       id: "1",
//       title: "Fress Kisses",
//       img: "../img/petFoodies-fressKisses.png",
//     },
//     {
//       id: "2",
//       title: "Fress Kisses",
//       img: "../img/petFoodies-fressKisses.png",
//     },
//     {
//       id: "3",
//       title: "Fress Kisses",
//       img: "../img/petFoodies-fressKisses.png",
//     },
//   ];

//   localStorage.setItem("products", JSON.stringify(sampleProducts));
// }

// addDetail(JSON.parse(localStorage.getItem("products")));

// let products = JSON.parse(localStorage.getItem("products"));
// let product = products.find((product) => product.id == "3");
// product.title = "Ten moi";

// localStorage.setItem("products", JSON.stringify(products));
