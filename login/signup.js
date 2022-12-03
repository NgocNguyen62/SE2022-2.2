
let username = document.getElementById("username");
let password = document.getElementById("password");
let btnSignup = document.getElementById("btnsignup");
let password2 = document.getElementById("password2");
btnSignup.onclick = function signUp(e) {
  e.preventDefault();
  if(password2.value != password.value){
    alert('Mật khẩu không trùng khớp');
  } else{
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
}
};
