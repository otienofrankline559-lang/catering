// TOGGLE MENU
function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("active");
}

// SMOOTH SCROLL
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = this.getAttribute("href");
        if (target !== "#") {
            document.querySelector(target).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// FORM SUBMIT ALERT
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});