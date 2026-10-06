// ================================
// DARK / LIGHT MODE
// ================================

const themeButton = document.createElement("button");

themeButton.type = "button";
themeButton.textContent = "🌙 Dark Mode";
themeButton.classList.add("theme-btn");
themeButton.setAttribute("aria-label", "Switch to dark mode");

document.body.appendChild(themeButton);

themeButton.addEventListener("click", function () {

    const darkModeEnabled = document.body.classList.toggle("dark-mode");

    if (darkModeEnabled) {
        themeButton.textContent = "☀️ Light Mode";
        themeButton.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeButton.textContent = "🌙 Dark Mode";
        themeButton.setAttribute("aria-label", "Switch to dark mode");
    }

});


// ================================
// CONTACT FORM VALIDATION
// ================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

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

}


// ================================
// MOBILE NAVIGATION MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navigation-menu");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        const menuIsOpen = navLinks.classList.toggle("active");

        menuBtn.setAttribute(
            "aria-expanded",
            menuIsOpen ? "true" : "false"
        );

        menuBtn.setAttribute(
            "aria-label",
            menuIsOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });

}


// ================================
// SCROLL TO TOP BUTTON
// ================================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}