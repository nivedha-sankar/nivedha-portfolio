// Mobile navigation menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Display the current year

document.getElementById("year").textContent =
    new Date().getFullYear();

// Contact form validation

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 2) {
        formStatus.textContent =
            "Please enter a name with at least 2 characters.";
        return;
    }

    if (message.length < 10) {
        formStatus.textContent =
            "Your message must contain at least 10 characters.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formStatus.textContent =
            "Please enter a valid email address.";
        return;
    }

    formStatus.textContent =
        "Form validation successful! This demo does not send messages yet.";

    contactForm.reset();
});