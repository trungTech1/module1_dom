document.addEventListener("DOMContentLoaded", function () {
  displayContent("users");

  document.getElementById("usersTab").addEventListener("click", function () {
    displayContent("users");
  });

  document.getElementById("productsTab").addEventListener("click", function () {
    displayContent("products");
  });

  document.getElementById("settingsTab").addEventListener("click", function () {
    displayContent("settings");
  });
});

function displayContent(tab) {
  let contentContainer = document.getElementById("content");
  contentContainer.innerHTML = `<h2>${
    tab.charAt(0).toUpperCase() + tab.slice(1)
  }</h2>`;
}
