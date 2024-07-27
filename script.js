function store() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var conpass = document.getElementById("conpass").value;
    var phonum = document.getElementById("phonenum").value;
    var useradd = document.getElementById("useradd").value;
    var usercity = document.getElementById("usercity").value;
    var usercountry = document.getElementById("usercountry").value;

    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if(email.length == 0){
        alert('Please fill in email');
        return false;
    }else if (pass != conpass) {
        alert("Passwords do not match.");
        return false;
     }else if(pass.length == 0){
      alert('Please fill in password');
      return false;
     }else if(email.length == 0 && pw.value.length == 0){
       alert('Please fill in email and password');
       return false;
     }else if(pass.length > 8){
      alert('Max of 8');
      return false;
     }else if(!pass.match(numbers)){
      alert('please add 1 number to the Password');
      return false;
     }else if(!pass.match(upperCaseLetters)){
      alert('please add 1 uppercase letter to the Password');
      return false;
     }else if(!pass.match(lowerCaseLetters)){
      alert('please add 1 lowercase letter to the Password');
      return false;
      }else if(phonum == 0){
        alert('Please fill in the phone number');
        return false;
      }else if(useradd == 0){
        alert('Please fill in the address');
        return false;
      }else if(usercity == 0){
        alert('Please fill in the City');
        return false;
      }else if(usercountry == 0){
        alert('Please fill in the country');
        return false;
      }
      
      localStorage.setItem("username", username);
      localStorage.setItem("pass", pass);

      alert("Registration successful!");
      window.location.href="login page.html";
      return true;
    }


    function check() {
        var username = document.getElementById("username1").value;
        var password = document.getElementById("pass1").value;
    
        var storedUsername = localStorage.getItem("username");
        var storedPassword = localStorage.getItem("pass");
    
        if (username != storedUsername || password != storedPassword) {
            alert("Invalid username or password.");
           
        
        } else {
            sessionStorage.setItem("username", username);
            window.location.href="home.html";
            alert("login success");

            
        }
    }
    var page = window.location.pathname;

if (page == "home.html") {
    var value = sessionStorage.getItem("username");
    if(value == null){
    window.location.href = "login page.html";
    };
};






var registrationForm = document.querySelector('#register');
registrationForm.addEventListener('submit', function(event){
event.preventDefault();store();});
