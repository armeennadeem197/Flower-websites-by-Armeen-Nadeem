// JavaScript to handle contact form submission
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get form field values
        const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
        const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
        const address = contactForm.querySelector('input[placeholder="Your Address"]').value;
        const phone = contactForm.querySelector('input[placeholder="Phone Number"]').value;
        const message = contactForm.querySelector('#message').value;

        // Simple form validation
        if (!name || !email || !address || !phone || !message) {
            alert("Please fill in all the fields.");
            return;
        }

        // Simulate successful form submission (could be replaced with actual form submission via AJAX)
        successMessage.textContent = "Thank you for your message, " + name + "! We will get back to you soon.";
        successMessage.style.display = "block";

        // Clear form fields
        contactForm.reset();
    });
});
