if (checkLogin()) window.location.href = "/";
console.clear();

const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");

loginBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode.parentNode;
  Array.from(e.target.parentNode.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      signupBtn.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode;
  Array.from(e.target.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      loginBtn.parentNode.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

function register(event) {
  event.preventDefault();
  const userName = event.target.userName.value;
  const email = event.target.Email.value;
  const password = event.target.Password.value;
  if (!userName || !email || !password) {
    alert("Vui lòng điền đầy đủ thông tin");
    return;
  }
  const hashedPassword = hash(password);

  let newUser = {
    id: Math.ceil(Date.now() * Math.random()),
    userName: userName,
    email: email,
    password: hashedPassword,
  };
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  if (
    users.find(
      (user) =>
        user.email === newUser.email || user.userName === newUser.userName
    )
  ) {
    alert("tên đăng nhập hoặc email đã rồn tại");
    return;
  }
  localStorage.setItem("users", JSON.stringify([...users, newUser]));
  alert("tạo tài khoản thành công");
  console.log("newuser", newUser);
  event.target.userName.value = "";
  event.target.Email.value = "";
  event.target.Password.value = "";
}
function login(event) {
  event.preventDefault();
  let data = {
    loginId: event.target.loginId.value,
    password: event.target.Password.value,
  };

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let user = users.find(
    (item) => item.email === data.loginId || item.userName === data.loginId
  );

  if (!user) {
    alert(
      "Tài khoản không tồn tại. Vui lòng kiểm tra lại email hoặc tên đăng nhập"
    );
    return;
  }

  if (hash(data.password) !== user.password) {
    alert("Mật khẩu không đúng. Vui lòng kiểm tra lại");
    return;
  }

  let token = createToken(user);
  localStorage.setItem("token", token);
  window.location.href = "/";
}
