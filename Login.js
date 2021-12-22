//Login Page JS file
let unameNode=document.getElementById("uname");
let passwordNode=document.getElementById("password");

let border1="2px solid red";

let pNode1=document.getElementById("error1");
let formNode=document.getElementById("LoginForm");

function Error(){
    pNode1.style.backgroundColor="green";
    pNode1.style.fontSize="14px";
    pNode1.style.height="24px";
    pNode1.style.width="100%";
    pNode1.style.textAlign="center";
    pNode1.style.paddingTop="6px";
}

function validateForm(){
    pNode1.style.backgroundColor=null;
    
    pNode1.textContent="";
    let uName=unameNode.value;
    let password=passwordNode.value;
    console.log(uName);
    console.log(password);
    if(uName!=''){
        if(password!=''){
            if(password=='Jayesh@123' && uName=='Jayesh123')
            {   
                window.alert("Login Successfully...")
                return true;
            }
            else{
                pNode1.textContent="Please Enter Valid Username & Password!!!";
                pNode1.style.backgroundColor="green";
                pNode1.style.fontSize="14px";
                pNode1.style.height="34px";
                pNode1.style.width="100%";
                pNode1.style.textAlign="center";
                pNode1.style.paddingTop="6px";
                return false;
            }
        }
        else{
            pNode1.textContent="Please enter Password!!!";
            Error();
            return false;
        }
    }
    else{
        pNode1.textContent="Please enter Username!!!";
        Error();
        return false;
    }
    
}