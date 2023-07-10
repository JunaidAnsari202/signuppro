function showPass(){
    let showPassword = document.getElementById("showPass");
    if(showPassword.type==='password'){
        showPassword.type = 'text';

    }else{
        showPassword.type ='password';
    }
    
}

function showPasswords(){
    let showPassword1 = document.getElementById("createPass");
    let showPassword2 = document.getElementById("confirmPass")
    if(showPassword1.type==='password' && showPassword2.type==='password'){
        showPassword1.type = 'text';
        showPassword2.type = 'text';

    }else{
        showPassword1.type ='password';
        showPassword2.type ='password';
    }
}
function checkPass(){
    let createPassword=document.getElementById("createPass").value;
    let confirmPassword = document.getElementById("confirmPass").value;
    if(createPassword==="" || confirmPassword===""){
        document.getElementById("msg").textContent="No Input From The User...";
        document.getElementById("msg").style.color='green';
    }
    else if(createPassword===confirmPassword){
        document.getElementById("msg").textContent="Password Matched";
        document.getElementById("msg").style.color='green';
    
    }else{
        document.getElementById("msg").textContent="Password Not Matched";
        document.getElementById("msg").style.color='red';
    }
}