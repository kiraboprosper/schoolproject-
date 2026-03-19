// Smooth scroll fade-in animation
window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Form validation
function validateForm(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
    } else {
        alert("Message sent successfully!");
    }
}