function validate(e){
    e.preventDefault
    const email=document.getElementById("email").value
    const pass = document.getElementById("password").value
    const age = document.getElementById("age").value
    const msgbox = document.getElementById("messagge")
    var messagge=""
    if (email===""){
        
        message = "Enter an email"

        msgbox.style.color = "red";

    }

    else if (pass === "") {

        message = "Enter an password";

        msgbox.style.color = "red";

    }

    else if (age === "") {

        message = "Enter an age";

        msgbox.style.color = "red";

    } else {

        message = "login successfull";

        msgbox.style.color = "green";

    }

    msgbox.innerText = message; 
    
}