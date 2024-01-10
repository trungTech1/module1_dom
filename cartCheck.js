let iconCart = document.querySelector(".icon-cart");
let wrapper = document.querySelector(".wrapper");
let closeTableBtn = document.querySelector(".closeTable"); // Thay đổi class này từ "close" sang "closeTable"

iconCart.addEventListener("click", () => {
  console.log("hihi");
  wrapper.classList.toggle("showcart");
});

closeTableBtn.addEventListener("click", () => {
  wrapper.classList.toggle("showcart");
});
