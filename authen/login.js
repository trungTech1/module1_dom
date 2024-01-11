import { signInWithGoogle } from "../firebase.js";
// import { signInWithGitHub } from "../firebaseGithub.js";

if (checkLogin()) window.location.href = "/";
console.clear();
export function changeForm(formToShow, formToHide) {
  formToShow.classList.add("slide-up");
  formToHide.classList.remove("slide-up");
}
// Hàm đăng ký
export function register(event) {
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
    cart: [],
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
  let loginFormContainer = document.querySelector(".login");
  let signupFormContainer = document.querySelector(".signup");
  signupFormContainer.classList.add("slide-up");
  loginFormContainer.classList.remove("slide-up");
  console.log("newuser", newUser);
  event.target.userName.value = "";
  event.target.Email.value = "";
  event.target.Password.value = "";
}
// Hàm đăng nhập
export function login(event) {
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
const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");

loginBtn.addEventListener("click", () => {
  changeForm(signupBtn.parentNode, loginBtn.parentNode.parentNode);
});

signupBtn.addEventListener("click", () => {
  changeForm(loginBtn.parentNode.parentNode, signupBtn.parentNode);
});
document.getElementById("registerForm").addEventListener("submit", (e) => {
  register(e);
});
document.getElementById("loginForm").addEventListener("submit", (e) => {
  login(e);
});
// Đăng nhập bằng google
document
  .getElementById("signInWithGoogle")
  .addEventListener("click", async () => {
    let loaderBox = document.querySelector(".loader_delay");

    try {
      loaderBox.classList.add("active");
      let result = await signInWithGoogle();
      let users = JSON.parse(localStorage.getItem("users") || "[]");
      let checkEmail = users.find((user) => user.email === result.user.email);
      if (checkEmail) {
        let user = users.find((item) => item.email === result.user.email);
        let token = createToken(user);
        localStorage.setItem("token", token);
        window.location.href = "/";
      } else {
        let newUser = {
          id: Math.ceil(Date.now() * Math.random()),
          email: result.user.email,
          password: hash(Math.ceil(Date.now() * Math.random())),
          avata: result.user.photoURL,
          cart: [],
        };
        localStorage.setItem("users", JSON.stringify([...users, newUser]));
        let token = createToken(newUser);
        localStorage.setItem("token", token);
        window.location.href = "/";
      }
      loaderBox.classList.remove("active");
    } catch (err) {
      loaderBox.classList.remove("active");
      alert("vui lòng thử lại");
    }
  });
// document
//   .getElementById("signInWithGithub")
//   .addEventListener("click", async () => {
//     try {
//       let gitHub = await signInWithGitHub();
//       console.log("gitHub", gitHub);
//       console.log("gitHub.user", gitHub.user);
//       let users = JSON.parse(localStorage.getItem("users") || "[]");
//       let checkGithub = users.find((user) => user.email === gitHub.user.email);
//       if (checkGithub) {
//         let user = users.find((item) => item.email === gitHub.user.email);
//         let token = createToken(user);
//         localStorage.setItem("token", token);
//         window.location.href = "/";
//       } else {
//         let newUser = {
//           userName: Math.ceil(Date.now() * Math.random()),
//           email: gitHub.user.email,
//           password: hash(Math.ceil(Date.now() * Math.random())),
//           avata: gitHub.user.photoURL,
//         };
//         users.push(newUser);
//         localStorage.setItem("users", JSON.stringify(users));
//         let token = createToken(newUser);
//         localStorage.setItem("token", token);
//         window.location.href = "/";
//       }
//     } catch (err) {
//       alert("vui lòng thử lại");
//       console.log(err);
//     }
//   });
