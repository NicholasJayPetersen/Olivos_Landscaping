const checkName = /^[a-zA-Z]+\s?[a-zA-Z]*\s?[a-zA-Z]*$/ //requires at least one non-digit char
const checkPhone = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/ //US phone numbers only
const checkEmail = /^[\d\w\.]+@[a-z]+.[a-z]+.?[a-z]+?$/
const checkMessage = /.+/ //Anything as long as it's not empty

export function validate(form){

    let nameInput = document.getElementById("name");
    let phoneInput = document.getElementById("phone");
    let emailInput = document.getElementById("email");
    let messageInput = document.getElementById("message");

    nameInput.addEventListener("keyup", function () {
        console.log(checkName.test(nameInput.value))
        if (checkName.test(nameInput.value))
        {
            nameInput.style.borderBottom = "2px solid green";
            nameInput.style.boxShadow = "none";

        }
        else
        {
            nameInput.style.borderBottom = "2px solid yellow";
            nameInput.style.boxShadow = "none";
        }

    });

    phoneInput.addEventListener("keyup", function () {
        console.log(checkPhone.test(phoneInput.value))
        if (checkPhone.test(phoneInput.value))
        {
            phoneInput.style.borderBottom = "2px solid green";
            phoneInput.style.boxShadow = "none";
        }
        else
        {
            phoneInput.style.borderBottom = "2px solid yellow";
            phoneInput.style.boxShadow = "none";
        }
    });

    emailInput.addEventListener("keyup", function () {
        console.log(checkEmail.test(emailInput.value))
        if (checkEmail.test(emailInput.value))
        {
            emailInput.style.borderBottom = "2px solid green";
            emailInput.style.boxShadow = "none";
        }
        else
        {
            emailInput.style.borderBottom = "2px solid yellow";
            emailInput.style.boxShadow = "none";
        }
    });

    messageInput.addEventListener("keyup", function () {
        if (checkMessage.test(messageInput.value))
        {
            messageInput.style.border = "2px solid green";
            messageInput.style.boxShadow = "none";
        }
        else
        {
            messageInput.style.border = "2px solid yellow";
            messageInput.style.boxShadow = "none";
        }
    });
}
