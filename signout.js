import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
const auth = getAuth(app);
export function signOutUser() {
  const currentUser = auth.currentUser;
  if (currentUser) {
    signOut(auth)
      .then(() => {
        console.log("Đăng xuất thành công");
        localStorage.removeItem("token");
      })
      .catch((error) => {
        console.error("Lỗi đăng xuất", error);
      });
  } else {
    console.log("Không có người dùng đang đăng nhập.");
  }
}
