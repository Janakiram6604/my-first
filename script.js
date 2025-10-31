
document.addEventListener("DOMContentLoaded", function() {
    
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
       
        const formStatus = document.getElementById("form-status");

        
        contactForm.addEventListener("submit", function(event) {
            
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || subject === "" || message === "") {
               
                formStatus.textContent = "Please fill out all fields.";
                formStatus.className = "error";
                return;
            }

            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
               
                formStatus.textContent = "Please enter a valid email address.";
                formStatus.className = "error";
                return; 
            }

            
            formStatus.textContent = "Thank you! Your message has been sent. (This is a demo)";
            formStatus.className = "success";

           
            contactForm.reset();

            
        });
    }

});
