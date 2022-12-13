
let username = document.getElementById("username");
let password = document.getElementById("password");
let btnSignup = document.getElementById("btnsignup");

btnSignup.onclick = function signUp(e) {
  e.preventDefault();
  let user = {
    username: username.value,
    password: password.value,
  };
  
  let json = JSON.stringify(user);
  if (!username.value || !password.value) {
    alert("vui long nhap day du thong tin");
  } else {
    localStorage.setItem(username.value, json);
    alert("dang ky thanh cong");
  }
};
