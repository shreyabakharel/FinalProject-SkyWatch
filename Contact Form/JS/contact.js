// Get all needed elements from the DOM
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

// Get data from EmailJS
const publicKey = "2Kg6tzQvS0Qssv1xU";
const serviceId = "service_29p3z5t";
const templateId = "template_eu9ucm2";

// Initialize EmailJS with public key
emailjs.init(publicKey);

// Add submit event to the form
contactForm.addEventListener("submit", event => {
    event.preventDefault();

    // Change button text
    submitBtn.innerText = "Processing...";

    // Get all input field values
    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };

    // Send the email
    emailjs.send(serviceId, templateId, inputFields)
        .then(() => {
            // Change button text
            submitBtn.innerText = "Message Sent Successfully";

            // Clear out all input fields
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
        })
        .catch((error) => {
            console.log(error);
            // Change button text
            submitBtn.innerText = "Something went wrong";
        });
});
