function sendInformation() {
    // check if fields are empty 
    // const nameField = document.getElementById("nameInput").value();
    // const surnameField = document.getElementById("surnameInput").value();
    // const cpfField = document.getElementById("cpfInput").value();
    // const userField = document.getElementById("userInput").value();

    // if (nameField === "" && surnameField === "" && cpfField === "" && userField === "") {
    checkUserName();
    checkPassword();
    // }
}

function checkUserName() {
    const alphanumericRegex = /^[a-z0-9]+$/i
    const userName = document.getElementById("userInput").value

    
    if (userName === "") {
        alert("The user field cannot be null");
    }
    
    else if (!(alphanumericRegex.test(userName))){
        alert("The User field can only have alphanumeric characters");
    }
    
    else if (!(userName.length >= 3)) {
        alert("The User field needs at least 3 characters");
    }
    
    else if (!(userName.length <= 12)) {
        alert("The User field must have at most 12 characters");
    }
}

function checkPassword() {
    
    const password = document.getElementById("passwordInput").value
    if (password === "") {
        alert("The password field cannot be null");
    }

    else if (!(password.length >= 6)) {
        alert("The Password field needs at least 6 characters");
    }   

    else if (!(password.length <= 12)) {
        alert("The Password field must have at most 12 characters");
    }
}