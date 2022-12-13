let username = document.getElementById("username");
let password = document.getElementById("password");
let btnLogin = document.getElementById("btnlogin")

btnLogin.onclick = function Login(e){
  e.preventDefault();
  let user = {
    username: username.value,
    password: password.value,
  };
  console.log(user);
  let json = JSON.stringify(user);
  if (!username.value || !password.value) {
    alert("vui long nhap day du thong tin");
  }
  if (localStorage.getItem(username.value) == json) {
    alert("dang nhap thanh cong");
    window.location="http://127.0.0.1:5500/upload.html"
  } else {
    alert("dang nhap that bai");
  }
}

