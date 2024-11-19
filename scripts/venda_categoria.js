document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".dropdown-toggle").forEach(function(toggle) {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            const parent = this.closest(".dropdown");
            parent.classList.toggle("open");
        });
    });
});