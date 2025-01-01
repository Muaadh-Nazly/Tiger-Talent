document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2gmg5fp", // Replace with your Service ID
        "template_mum7mbp", // Replace with your Template ID
        this,
        "VU5qnx-uM6XsHtIWm" // Replace with your Public Key
      )
      .then(
        function (response) {
          alert("Message sent successfully!");
        },
        function (error) {
          alert("Failed to send message. Please try again.");
          console.error("Error:", error);
        }
      );
  });
