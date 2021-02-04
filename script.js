function valid(){
    // if(f.name.value.length == ""){
    //     alert("Please fill your name");
    //     return;
    // }
    // if(f.password.value.length < 5) {
    // alert("Password length must be more than 5 digits");
    // return;
    //     }
    //     if(f.address.value.length == ""){
    //         alert("Please fill your address");
    //         return;
    //     }
    //     if(f.address.value.length < 5) {
    //         alert("Incorrect address");
    //         return;
    //     }
    //     if(f.city.value.length == ""){
    //         alert("Please fill your city");
    //         return;
    //     }
    //     if(f.city.value.length < 4){
    //         alert("Incorrect city name");
    //         return;
    //     }
    //     if(f.email.value.length == ""){
    //         alert("Please fill your email address");
    //         return;
    //     }
    //     if(f.email.value.length < 8){
    //         alert("Length of email must be more than 8 digits")
    //         return;
    //     }
    //     var a = f.email.value;
    //     s = a.indexOf("@");
    //     if(s == -1){
    //         alert("Email must have @");
    //         return;
    //     }
    //     s = a.indexOf(".com")
    //     if(s == -1){
    //         alert("Email must have .com");
    //         return;
    //     }

    if(/[a-z,A-Z]/.test(f.phone.value)){
        alert("Incorrect phone number format");
        return;
    }

    var s = f.phone.value.indexOf("/[a-zA-Z]/")
            if(s == 1){
                alert("Please enter numbers");
                return;
            }
        // if(f.phone.value.length == ""){
        //     alert("Please enter phone number");
        //     return;
        // }
        
        
        // if(f.phone.value == (/[a-zA-Z]/)){
        //     alert("Only numbers are allowed");
        //     return;
        // }
        if(f.phone.value.length < 10){
            alert("Length must be 10 numbers");
            return;
        }
        if((!f.gender[0].checked) && (!f.gender[1].checked)){
            alert("Please check radio button");
            return;
        }

        var name = document.getElementById('name').value;
        var password = document.getElementById('password').value;
        var address = document.getElementById('address').value;
        var city = document.getElementById('city').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var gender = document.getElementById('gender').value;

        window.localStorage.setItem('name',name);
        window.localStorage.setItem('password',password);
        window.localStorage.setItem('address',address);
        window.localStorage.setItem('city',city);
        window.localStorage.setItem('email',email);
        window.localStorage.setItem('phone',phone);
        window.localStorage.setItem('gender',gender);

        alert("Data saved in local storage");
}

function uploadImage(event){
    var reader = new FileReader();
    var name = event.target.files[0].name;
    reader.addEventListener("load",function(){
        if(this.result && localStorage){
            window.localStorage.setItem(name,this.result);
        } else {
            alert();
        }
    });
    reader.readAsDataURL(event.target.files[0]);
}