function hash(everyone) {
  everyone = `abcd**_${everyone}_2143sdasds`;
  let hashEveryone = "";
  for (let i in everyone) {
    hashEveryone += everyone[i].charCodeAt(0);
  }
  return hashEveryone * 12;
}
let rootUser = {
  id: Math.ceil(Date.now() * Math.random()),
  userName: "admin",
  email: "admin@gmail.com",
  password: hash("Anhqt@1994"),
  role: "admin",
  cart: [],
};
let users = JSON.parse(localStorage.getItem("users") || "[]");
localStorage.setItem("users", JSON.stringify(users));
let existingRootUser = users.find((user) => user.email === rootUser.email);
if (!existingRootUser) {
  users.push(rootUser);
  localStorage.setItem("users", JSON.stringify(users));
}
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
export function toggleUserRole(userId) {
  let loggedInUser = checkLogin();
  if (!loggedInUser || loggedInUser.role !== "admin") {
    alert("Bạn không có quyền chuyển đổi quyền.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
    users[userIndex].role = users[userIndex].role === "user" ? "admin" : "user";
    users[userIndex].status =
      users[userIndex].status === "approve" ? "de" : "approve";
    localStorage.setItem("users", JSON.stringify(users));
    displayUserTable();
    console.log(`Đã chuyển đổi quyền cho người dùng với ID ${userId}`);
  } else {
    console.error(`Không tìm thấy người dùng với ID ${userId}`);
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
    let cell5 = row.insertCell(4);

    cell1.textContent = user.id;
    cell2.textContent = user.userName;
    cell3.textContent = user.email;

    let statusButton = document.createElement("button");
    statusButton.textContent = user.status === "approve" ? "Approve" : "Reject";
    statusButton.addEventListener("click", () => toggleStatus(user.id));
    cell4.appendChild(statusButton);

    let toggleButton = document.createElement("button");
    toggleButton.textContent = "Chuyển đổi Quyền";
    toggleButton.addEventListener("click", () => toggleUserRole(user.id));
    cell5.appendChild(toggleButton);
  });

  contentContainer.innerHTML = "";
  contentContainer.appendChild(table);
}
