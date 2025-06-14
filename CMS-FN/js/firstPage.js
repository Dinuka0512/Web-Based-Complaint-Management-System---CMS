import {Validation} from "./util/Validation.js";

//TEXT FIELDS
let uName = $("#txtEmail");
let uPassword = $("#txtPassword");

//BUTTON
let signIn = $("#btnAdminSignIn");

function clearText(){
    uName.val("");
    uPassword.val("");
}

signIn.on("click", function (){
    if(Validation.isNameValid(uName.val())){
        if(Validation.isPasswordValid(uPassword.val())){
            alert("All are Ok");
            clearText();
        }else{
            alert("Password is Not Valid");
        }
    }else {
        alert("UserName Is Not Valid");
    }
})