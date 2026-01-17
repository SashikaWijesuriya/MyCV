const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById("contact-form");
if (contactForm && window.emailjs) {
  const serviceId = "service_9bhzzx9";
  const templateId = "template_7oiq5dj";
  const publicKey = "vQKyllrTwDkclJ8fU";

  emailjs.init(publicKey);

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const params = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      subject: document.getElementById("heading").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send(serviceId, templateId, params)
      .then(() => {
        alert("Message sent. Thank you!");
        contactForm.reset();
      })
      .catch(() => {
        alert("Failed to send. Please try again later.");
      });
  });
}
