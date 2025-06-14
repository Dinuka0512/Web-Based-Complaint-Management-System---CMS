import {Validation} from "./util/Validation";

//TEXT FIELDS
let uName = $("#txtEmail");
let uPassword = $("#txtPassword");

//BUTTON
let signIn = $("#btnAdminSignIn");

pageReset();
function pageReset(){

}

signIn.on("click", function (){
    if(Validation.isNameValid(uName.val())){
        if(Validation.isPasswordValid(uPassword.val())){

        }
    }
})