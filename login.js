function login(){

    if(f.name.value == ""){
        alert("Please fill username")
        return;
    }
    if(f.name.value.length < 5){
        alert("Length of username must be more than 5");
        return;
    }
    if(f.password.value == ""){
        alert("Please fill password")
        return;
    }
    if(f.password.value.length < 5){
        alert("Length of password must be more than 5");
        return;
    }
    
    if((f.name.value == "admin") && (f.password.value == "admin")){
        window.location = "admin.html"
    } else {
        alert("Invalid credentials");
        f.name.value = "";
        f.password.value = "";
    }
}