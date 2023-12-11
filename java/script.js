document.getElementById("submitButton").addEventListener("click", validateForm);

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields");
        return;
    }
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    document.getElementById("contactForm").reset();


}

