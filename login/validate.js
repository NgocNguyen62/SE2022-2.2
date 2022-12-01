function checkten(event){
    event.preventDefault();
    var mess = document.getElementById('errorText');
    var username = document.getElementById('username');
    if(username == ""){
        document.getElementById('username').style.backgroundColor = 'yellow';
        mess.innerHTML += 'Tên đăng nhập không được để trống!!';
        return false;
    } else if(username.length < 3 || username.length > 10){
        document.getElementById('username').style.backgroundColor = 'yellow';
        mess.innerHTML += 'Tên đăng nhập từ 3-10 kí tự';
        return false;
    }
    return true;
}

function checkPass(event){
    event.preventDefault();
    var pass = document.getElementById('password').value;
    var mess = document.getElementById('errorText');
    if (pass == ''){
        document.getElementById('password').style.backgroundColor = 'yellow';
        mess.innerHTML += 'Mật khẩu không để trống';
        return false;
    }
    return true;
}

function checkPass2(event){
    event.preventDefault();
    var pass2 = document.getElementById('password2').value;
    var pass = document.getElementById('password').value;
    var mess = document.getElementById('errorText');
    if (pass2 == ''){
        document.getElementById('password').style.backgroundColor = 'yellow';
        mess.innerHTML += 'Nhập lại mật khẩu!!';
        return false;
    } else if (pass2 != pass){
        mess.innerHTML += 'Mật khẩu không trùng khớp';
        return false;
    }
    return true;
}

export function validate(event){
    var mess = document.getElementById('errorText');
    mess.innerHTML = '';
    return (checkPass(event) && checkten(event) && checkPass2(event))
}