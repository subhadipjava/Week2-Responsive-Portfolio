// Create Dark Mode button
const themeButton = document.createElement("button");

themeButton.textContent = "🌙 Dark Mode";
themeButton.classList.add("theme-btn");

document.body.appendChild(themeButton);

// Change theme when button is clicked
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }

});
// Contact Form Validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";

    } else {

        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";

        contactForm.reset();
    }

});
// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});
// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});