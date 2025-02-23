document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault();


    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());


    alert("Form successfully submitted!");

    await fetch("https://your-backend.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            to: "qaisarbangash47@gmail.com",
            subject: "New Contact Form Submission",
            body: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
        })
    });


    this.reset();
});
