function scrollToForm() {
    document.getElementById("apply-form").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("lead-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your application has been submitted successfully!");
});
