document.getElementById("usersTab").addEventListener("click", function () {
  displayContent("users");
});

document.getElementById("productsTab").addEventListener("click", function () {
  console.log("aaaaaaaa");
  displayContent("products");
});

document.getElementById("settingsTab").addEventListener("click", function () {
  displayContent("settings");
});
let contentContainer = document.getElementById("content");
export function displayContent(tab) {
  contentContainer.innerHTML = "";
  if (tab === "users") {
    contentContainer.innerHTML += `<h2>${
      tab.charAt(0).toUpperCase() + tab.slice(1)
    }</h2>`;
    displayUserTable();
  } else if (tab === "products") {
    displayProductTable();
  } else if (tab === "settings") {
    displaySettingsContent();
  }
}

function displayUserTable() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let table = document.createElement("table");
  let thead = table.createTHead();
  let row = thead.insertRow();
  let headers = ["ID", "UserName", "Email", "Status", "Actions"];

  headers.forEach((header) => {
    let th = document.createElement("th");
    let text = document.createTextNode(header);
    th.appendChild(text);
    row.appendChild(th);
  });

  let tbody = table.createTBody();

  users.forEach((user) => {
    row = tbody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.textContent = user.id;
    cell2.textContent = user.userName;
    cell3.textContent = user.email;
    cell4.innerHTML = `<button onclick="approveUser(${user.id})">Approve</button>`;
    cell5.innerHTML = `<button onclick="editUser(${user.id})">Sửa</button>
                       <button onclick="deleteUser(${user.id})">Xóa</button>`;
  });

  contentContainer.innerHTML = "";
  contentContainer.appendChild(table);
}
