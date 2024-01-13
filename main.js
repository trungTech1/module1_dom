function renderHeader(data = null) {
  const baseUrl = location.origin;
  return `<header>
        <div class="container">
          <div class="header-container">
            <div class="header-top">
              <div class="header-logo">
                <img
                  src="${baseUrl}/img/header-logo.jpg"
                  alt=""
                  class="header-logo-img"
                />
                <div class="header-logo-small">
                  <h2 class="header-logo-title">shibainu</h2>
                  <p class="header-logo-index">Pet shop.</p>
                </div>
              </div>
              <div class="header-search-container">
                <div class="search-wrapper">
                  <input
                    type="text"
                    placeholder="Search for more than 10,000 products"
                    class="header-search"
                  />
                  <span class="search-icon-wrapper" >
                    <img
                      src="${baseUrl}/img/ion_search.png"
                      alt="Search Icon"
                      class="search-icon"
                    />
                  </span>
                </div>
              </div>
<div class= "authenBlock">
  ${
    data
      ? `<div class="email-block">
           <p class="emailDisplay">${data.email}</p>
           ${
             data.avata
               ? `<img class="emailImg" src="${data.avata}" alt="User Avatar">`
               : '<img class="defaultAvatar" src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="Default Avatar">'
           }
         </div>
         <button onclick="logout()" class="signoutButton">ĐĂNG XUẤT</button>`
      : `<button onclick="redirectToLogin()" class="signupButton">ĐĂNG KÝ</button>
         <button onclick="redirectToLogin()" class="signupButton">ĐĂNG NHẬP</button>`
  }
</div>
    
            </div>
            <div class="header-botton">
              <select class="header-categories-selection">
                <option disabled selected value="">Shop by categories</option>
                <option value="volvo">dog toy</option>
                <option value="saab">dog foot</option>
              </select>
              <ul class="header-menu-list">
                <li class="header-menu-item">
                  <a onclick = "reloadHome()" href="http://127.0.0.1:5500/index.html" class="header-menu-link">Home</a>
                </li>
                <li class="header-menu-item">
                  <a href="#" class="header-menu-link">Page</a>
                </li>
                <li class="header-menu-item">
                  <a href="${baseUrl}/product" class="header-menu-link">Shop</a>
                </li>
                <li class="header-menu-item">
                  <a href="#" class="header-menu-link">Blog</a>
                </li>
                <li class="header-menu-item">
                  <a href="#" class="header-menu-link">Contact</a>
                </li>
                <li class="header-menu-item">
                  <a href="#" class="header-menu-link">Offers</a>
                </li>
              </ul>
              <div class="header-authen">
                <a href="#" class="header-authen-icon"
                  ><img src="${baseUrl}/img/ion_person.png" alt="" id="img"
                /></a>
                <a href="#" class="header-authen-icon"
                  ><img src="${baseUrl}/img/ion_heart.png" alt="" id="img"
                /></a>
                <div class="icon-cart"><a href="#" class="header-authen-icon"
                  ><img src="${baseUrl}/img/ion_cart.png" alt="" id="img" />
                </a><span id ="cartItemCount">0</span></div>
                
              </div>
            </div>
          </div>
        </div>
         <div id="paymentOverlay"></div>

  <div id="paymentForm">
    <h2>Payment Form</h2>
    <div id="checkoutForm">
      <label for="fullName"><span class="formRequired">*</span>Full Name:</label>
      <input type="text" id="fullName" required>
      
      <label for="phoneNumber"><span class="formRequired">*</span>Phone Number:</label>
      <input type="tel" id="phoneNumber" required>
      
      <label for="address"><span class="formRequired">*</span>Address:</label>
      <textarea id="address" required></textarea>
      
      <label for="totalAmount"><span class="formRequired">*</span>Total Amount:</label>
      <input type="text" id="totalAmount" readonly>

      <button type="button" onclick="processPayment()">Submit</button>
    </div>
  </div>

      </header>`;
}

function renderFooter() {
  const baseUrl = location.origin;
  return ` <footer>
        <div class="container">
          <div class="footer-container">
            <div class="footer-top">
              <div class="categorie">
                <div class="footer-logo">
                  <img
                    src="${baseUrl}/img/header-logo.jpg"
                    alt=""
                    class="footer-logo-img"
                  />
                  <div class="footer-logo-small">
                    <h2 class="footer-logo-title">shibainu</h2>
                    <p class="footer-logo-index">Pet shop.</p>
                  </div>
                </div>
                <p class="categorie-text">
                  Subscribe to our newsletter to get updates about our grand
                  offers.
                </p>
                <ul class="social-list">
                  <li class="social-item">
                    <a href="#" class="social-link"
                      ><i class="fa-brands fa-facebook" id="social-icon"></i
                    ></a>
                  </li>
                  <li class="social-item">
                    <a href="#" class="social-link"
                      ><img
                        src="${baseUrl}/img/social-Insta.png"
                        alt=""
                        class="social-icon"
                    /></a>
                  </li>
                  <li class="social-item">
                    <a href="#" class="social-link"
                      ><img src="${baseUrl}/img/social-p.png" alt="" class="social-icon"
                    /></a>
                  </li>
                  <li class="social-item">
                    <a href="#" class="social-link"
                      ><img
                        src="${baseUrl}/img/social-twiter.png"
                        alt=""
                        class="social-icon"
                    /></a>
                  </li>
                  <li class="social-item">
                    <a href="#" class="social-link"
                      ><img
                        src="${baseUrl}/img/social-youtube.png"
                        alt=""
                        class="social-icon"
                    /></a>
                  </li>
                </ul>
              </div>
              <div class="categorie">
                <h4 class="categorie-title">ouick links</h4>
                <ul class="categorie-list">
                  <li class="categorie-item">
                    <a href="#" class="categorie-item-link">Home</a>
                  </li>
                  <li class="categorie-item">
                    <a href="#" class="categorie-item-link">About us</a>
                  </li>
                  <li class="categorie-item">
                    <a href="#" class="categorie-item-link">Offers</a>
                  </li>
                  <li class="categorie-item">
                    <a href="#" class="categorie-item-link">Services</a>
                  </li>
                  <li class="categorie-item">
                    <a href="#" class="categorie-item-link">Contact us</a>
                  </li>
                </ul>
              </div>
              <div class="categorie">
                <h4 class="categorie-title">Help Centre</h4>
                <ul class="categorie-list">
                  <li class="categorie-item">
                    <a href="#" class="categorie-item-link">Payments</a>
                  </li>
                  <li class="categorie-item">
                    <a href="#" class="categorie-item-link">Shipping</a>
                  </li>
                  <li class="categorie-item">
                    <a href="#" class="categorie-item-link">Product returns</a>
                  </li>
                  <li class="categorie-item">
                    <a href="#" class="categorie-item-link">FAQs</a>
                  </li>
                  <li class="categorie-item">
                    <a href="#" class="categorie-item-link">Checkout</a>
                  </li>
                </ul>
              </div>
              <div class="categorie">
                <h4 class="categorie-title">Our newsletter</h4>
                <p class="categorie-text">
                  Subscribe to our newsletter to get updates about our grand
                  offers.
                </p>
                <input
                  type="email"
                  placeholder="Enter your email-address"
                  class="categorie-input"
                />
              </div>
            </div>
            <div class="footer-botton">
              <p class="footer-botton-left">
                ©2023 Waggy. All rights reserved.
              </p>
              <p class="footer-botton-right">
                Template design by:
                <a href="#" class="footer-botton-right-link"
                  >Templates Jungle</a
                >
              </p>
            </div>
          </div>
        </div>
      </footer>`;
}

function createToken(data) {
  let dataJsonstr = JSON.stringify({ data, privatekey: "quangtrungdn" });
  let hashStr = ``;
  for (let i in dataJsonstr) {
    hashStr += dataJsonstr[i].charCodeAt(0) * 2 + "|";
  }
  return hashStr;
}

function decodeToken(token) {
  let baseStr = ``;
  for (let i in token.split("|")) {
    if (token.split("|")[i] == "") break;
    baseStr += String.fromCharCode(token.split("|")[i] / 2);
  }
  try {
    return JSON.parse(baseStr);
  } catch (err) {
    return false;
  }
}
function hash(everyone) {
  everyone = `abcd**_${everyone}_2143sdasds`;
  let hashEveryone = "";
  for (let i in everyone) {
    hashEveryone += everyone[i].charCodeAt(0);
  }
  return hashEveryone * 12;
}
function checkLogin() {
  if (localStorage.getItem("token")) {
    let tokenData = decodeToken(localStorage.getItem("token"));
    if (tokenData.privatekey !== "quangtrungdn") {
      localStorage.removeItem("token");
      return null;
    }
    return tokenData.data;
  } else {
    return null;
  }
}
checkLogin();

function logout() {
  localStorage.removeItem("token");
  window.location.reload();
}
function redirectToLogin() {
  window.location.href = "/authen";
}
function reloadHome() {
  console.log("Redirecting to home...");
  setTimeout(function () {
    window.location.href = "http://127.0.0.1:5500/index.html";
  }, 5000);
}
document.getElementById("Shopping").addEventListener("click", () => {
  console.log("Vào trang shop");
  // Hiển thị thanh progress bar
  const progressBar = document.getElementById("myProgressBar");
  progressBar.style.width = "0%";
  progressBar.style.transition = "width 1s linear";

  // Thiết lập chuyển hướng sau 1 giây
  setTimeout(() => {
    progressBar.style.width = "100%";
    setTimeout(() => {
      window.location.href = "http://127.0.0.1:5500/product/";
    }, 1000);
  }, 1000);
});
