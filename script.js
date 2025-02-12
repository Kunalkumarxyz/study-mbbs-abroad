document.addEventListener("DOMContentLoaded", function () {
    // Scroll to form on CTA button click
    document.querySelector(".cta-button").addEventListener("click", function () {
        document.getElementById("apply-form").scrollIntoView({ behavior: "smooth" });
    });

    // Form validation
    document.getElementById("lead-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let name = document.querySelector("input[name='name']").value.trim();
        let email = document.querySelector("input[name='email']").value.trim();
        let phone = document.querySelector("input[name='phone']").value.trim();
        let country = document.querySelector("select[name='country']").value;

        if (name === "" || email === "" || phone === "" || country === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Here, you can add AJAX request to send form data to backend (if required)
        alert("Your application has been submitted successfully!");
        document.getElementById("lead-form").reset();
    });
});
