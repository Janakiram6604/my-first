// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Check if we are on the contact page by looking for the form
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
        // Find the status message element
        const formStatus = document.getElementById("form-status");

        // Add a submit event listener to the form
        contactForm.addEventListener("submit", function(event) {
            // Prevent the default form submission
            event.preventDefault();

            // Get form field values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            // --- Simple Validation ---
            if (name === "" || email === "" || subject === "" || message === "") {
                // Display error message
                formStatus.textContent = "Please fill out all fields.";
                formStatus.className = "error";
                return; // Stop the function
            }

            // --- Email Format Validation (Simple Regex) ---
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                // Display error message
                formStatus.textContent = "Please enter a valid email address.";
                formStatus.className = "error";
                return; // Stop the function
            }

            // --- Success ---
            // If all validation passes:
            formStatus.textContent = "Thank you! Your message has been sent. (This is a demo)";
            formStatus.className = "success";

            // Clear the form fields
            contactForm.reset();

            // In a real-world scenario, you would send this data to a server
            // using fetch() or another method.
            /*
            fetch('/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message })
            })
            .then(response => response.json())
            .then(data => {
                formStatus.textContent = "Message sent successfully!";
                formStatus.className = "success";
                contactForm.reset();
            })
            .catch(error => {
                formStatus.textContent = "An error occurred. Please try again.";
                formStatus.className = "error";
            });
            */
        });
    }
});