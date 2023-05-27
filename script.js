let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle("active");
};
window.onscroll = () => {
    navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
    if (darkmode.classList.contains("bx-moon")) {
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
    } else {
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("active");
    }
};

/*document.getElementById('contact-form1').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'send-email.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Email sent successfully');
            // You can add more logic here if needed
        } else {
            alert('Error sending email. Please try again.');
            // You can handle error cases here
        }
    };
    xhr.send('name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(message));
});*/

function sendEmail() {
    Email.send({
        SecureToken: "a5c64a22-d858-4385-8612-da29fc9db4ad",
        To: "keathareswar@gmail.com",
        From: "arunkdli69@gmail.com",
        Subject: "Hello from SMTPJS",
        Body: "This is the content of the email.",
    }).then(function(message) {
        alert("Email sent successfully!");
    });
}