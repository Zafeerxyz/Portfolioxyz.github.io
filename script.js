function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_e4sieke", "template_i7zue3j", parms)
        .then(() => {
            alert("Email Sent!!");
        })
        .catch((error) => {
            console.log("FAILED...", error);
        });
}