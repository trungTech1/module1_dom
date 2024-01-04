document
  .querySelector(".wrapper")
  .insertAdjacentHTML("afterbegin", renderHeader(checkLogin()));
document
  .querySelector(".wrapper")
  .insertAdjacentHTML("beforeend", renderFooter());
