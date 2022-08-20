var password_field=document.getElementById("input_password");
var hide_show_setting=document.getElementById("hide_show_password");
var strong=document.getElementById("showStrong");
var information_section=document.getElementById("information_section");

hide_show_setting.addEventListener("click",()=>{
    if(password_field.type == "text"){
    password_field.type="password";
    hide_show_setting.innerHTML="Show";
    }else{
        password_field.type="text";
        hide_show_setting.innerHTML="Hide";
    }
});

password_field.addEventListener("input",()=>{
    if(password_field.value.length==0){
        strong.innerHTML="";
    }
    else if(password_field.value.length<=5){
        strong.innerHTML="Too short";
        strong.style.color="yellow";
    }else if(password_field.value.length>5 && password_field.value.length<=7){
        strong.innerHTML="Weak";
        strong.style.color="gray";
    }else if(password_field.value.length>7){
        strong.innerHTML="Medium";
        strong.style.color="blue";
    }
});

function showInformation(){
    information_section.style.display="block";
    document.getElementById("opacity1").style.opacity="50%";
    document.getElementById("opacity2").style.opacity="50%";
}

function exitWindow(){
    information_section.style.display="none";
    document.getElementById("opacity1").style.opacity="100%";
    document.getElementById("opacity2").style.opacity="100%";
}