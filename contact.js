let nameNode=document.getElementById("id01");
let selectNode=document.getElementById("id02");
let emailNode=document.getElementById("id03");
let subjectNode=document.getElementById("id04");
let msgNode=document.getElementById("id05");

let border1= "2px solid red";

function valid1(){
    nameNode.style.border=null;
    let Name=nameNode.value;
    if(Name==''){
        nameNode.placeholder="This field is required";
        nameNode.style.border=border1;
        return false;
    }
    else{
        return true;
    }
}

function valid2(){
    selectNode.style.border=null;
    let select=selectNode.value;
    if(select==''){
        selectNode.style.border=border1;
        return false;
    }
    else{
        return true;
    }
}

function valid3(){
    emailNode.style.border=null;
    let email=emailNode.value;
    if(email==''){
        emailNode.placeholder="This field is required";
        emailNode.style.border=border1;
        return false;
    }
    else if(!email.includes('@') || ss==''){
        emailNode.placeholder="Put valid email ID";
        emailNode.style.border=border1;
        return false;
    }
    else{
        return true;
    }
}

function valid4(){
    subjectNode.style.border=null;
    let subject=subjectNode.value;
    if(subject==''){
        subjectNode.placeholder="This field is required";
        subjectNode.style.border=border1;
        return false;
    }
    else{
        return true;
    }
}

function valid5(){
    msgNode.style.border=null;
    let msg=msgNode.value;
    if(msg==''){
        msgNode.placeholder="Don't keep it blank!!!";
        msgNode.style.border=border1;
        return false;
    }
    else{
        return true;
    }
}

function validateForm(){
    let str1=valid1();
    let str2=valid2();
    let str3=valid3();
    let str4=valid4();
    let str5=valid5();
    if((str1 && str2 && str3 && str4 && str5)==true){
        window.alert("Message send!!!");
        return true;
    }
    else{
        return false;
    }
}