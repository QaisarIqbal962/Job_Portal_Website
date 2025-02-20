document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Collect form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    // Show success message on the webpage
    alert("Form successfully submitted!");
    
    // Send email using an API (such as EmailJS or a backend server)
    await fetch("https://your-backend.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            to: "qaisarbangash47@gmail.com",
            subject: "New Contact Form Submission",
            body: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
        })
    });

    // Reset form after submission
    this.reset();
});
