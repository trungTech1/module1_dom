document.addEventListener("DOMContentLoaded", function () {
  // Mã JavaScript của bạn ở đây
  let iconCart = document.querySelector(".icon-cart");
  let wrapper = document.querySelector(".wrapper");
  let closeTableBtn = document.querySelector(".closeTable");

  iconCart.addEventListener("click", () => {
    console.log("hihi");
    wrapper.classList.toggle("showcart");
  });

  if (closeTableBtn) {
    closeTableBtn.addEventListener("click", () => {
      console.log("hihi1");
      wrapper.classList.remove("showcart");
      console.log(wrapper.classList);
    });
  } else {
    console.error("Phần tử không tồn tại trong DOM");
  }
});
