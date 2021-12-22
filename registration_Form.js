let passwd=document.getElementById("passwd");
let conformP=document.getElementById("cpasswd");


function cp(){
    if(conformP!==passwd){
    alert("Confirm password does not match!!!");
    conformP.style.borderBottom="1px solid red";
    return false;
    }
    else{
        return true;
    }
}
let check=document.getElementById("showp");
function show(){
if(check.checked){
    passwd.type="text";
    conformP.type="text";
    passwd.style.color="rgba(172, 255, 47, 0.952)";
    passwd.style.fontSize="17px";
    conformP.style.color="rgba(172, 255, 47, 0.952)";
    conformP.style.fontSize="17px";
}
else{
    passwd.type="password";
    conformP.type="password";
}
}