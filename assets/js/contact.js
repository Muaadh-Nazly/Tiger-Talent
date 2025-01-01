document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2gmg5fp",
        "template_mum7mbp", 
        this,
        "VU5qnx-uM6XsHtIWm" 
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
