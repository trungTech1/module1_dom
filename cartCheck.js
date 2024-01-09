let iconCart = document.querySelector(".icon-cart");
let body = document.querySelector("body");
let closeTableBtn = document.querySelector(".closeTable"); // Thay đổi class này từ "close" sang "closeTable"

iconCart.addEventListener("click", () => {
  console.log("hihi");
  body.classList.toggle("showcart");
});

closeTableBtn.addEventListener("click", () => {
  body.classList.toggle("showcart");
});
