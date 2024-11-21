document.addEventListener("DOMContentLoaded", function () {
    
    // Handle "FLOW" appearing first
    const flowTitle = document.querySelector('.flow-title');
    if (flowTitle) {
        flowTitle.classList.add('visible'); // "FLOW" becomes visible immediately
    }

    // Add a delay for the rest of the content
    setTimeout(() => {
        const surfaceContent = document.querySelector('.surface-content');
        if (surfaceContent) {
            surfaceContent.classList.add('visible'); // Make content below FLOW visible
        }
    }, 1000); // Adjust delay (1 second)

    // Handle scrolling animations for other hidden elements
    const hiddenElements = document.querySelectorAll('.hidden:not(.flow-title):not(.surface-content)');
    if (hiddenElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        hiddenElements.forEach((el) => observer.observe(el));
    }

    // FAQ Section: Expand/Collapse Answers with Single Open Behavior
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            // Close all other answers
            faqQuestions.forEach((q) => {
                if (q !== question) {
                    q.classList.remove('active'); // Remove active class
                    q.nextElementSibling.style.display = 'none'; // Hide other answers
                }
            });

            // Toggle visibility of the clicked answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                question.classList.remove('active'); // Remove active class
            } else {
                answer.style.display = 'block';
                question.classList.add('active'); // Add active class for styling
            }
        });
    });

    // Bubble animation
    const bubbleContainer = document.querySelector(".bubbles");
    if (bubbleContainer) {
        const bubbleCount = 100; // Increase density to ensure continuity

        for (let i = 0; i < bubbleCount; i++) {
            const bubble = document.createElement("span");

            // Randomize size
            const size = Math.random() * 8 + 8; // Sizes between 4px and 12px
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;

            // Randomize position
            bubble.style.left = `${Math.random() * 100}%`;

            // Evenly distribute animation duration and delay
            bubble.style.animationDuration = `${Math.random() * 50 + 30}s`; // 20s to 40s
            bubble.style.animationDelay = `${i * 0.2}s`; // Gradually stagger delays

            bubbleContainer.appendChild(bubble);
        }
    }



    emailjs.init("c8u0fkIdSiqmWEbIY"); // Replace with your actual Public Key from EmailJS

    // Function to send email using EmailJS
    function sendEmail() {
        const serviceID = 'service_z35tdht'; // Replace with your actual Service ID
        const templateID = 'template_p2h4p4l'; // Replace with your actual Template ID

        const params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        // Validate form inputs
        if (!params.name || !params.email || !params.message) {
            alert("Please fill in all fields before sending the message.");
            return;
        }

        const sendButton = document.getElementById('send-button');
        sendButton.disabled = true; // Disable button to prevent multiple clicks
        sendButton.innerText = "Sending...";

        emailjs.send(serviceID, templateID, params)
            .then(response => {
                alert("Message sent successfully!");
                document.getElementById("contact-form").reset(); // Reset form fields
                sendButton.disabled = false; // Re-enable button
                sendButton.innerText = "Send Message";
            })
            .catch(error => {
                alert("Failed to send message: " + JSON.stringify(error));
                sendButton.disabled = false; // Re-enable button
                sendButton.innerText = "Send Message";
            });
    }

    // Attach event listener to button
    const sendButton = document.getElementById('send-button');
    if (sendButton) {
        sendButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default form submission
            sendEmail(); // Call the function to send the email
        });
    }



    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    
    // Toggle the active class on the navbar when the hamburger is clicked
    hamburger.addEventListener('click', function () {
        navbar.classList.toggle('active'); // Toggle the active class
    });




});

function toggleDropdown(element) {
    // Get all service details sections
    const allServiceDetails = document.querySelectorAll('.service-details');
    const allToggleSigns = document.querySelectorAll('.toggle-sign');

    // Loop through all service details and close them, except the current one
    allServiceDetails.forEach((serviceDetails) => {
        if (serviceDetails !== element.nextElementSibling) {
            serviceDetails.style.display = 'none'; // Hide other sections
        }
    });

    // Loop through all toggle signs and reset to '+', except the current one
    allToggleSigns.forEach((toggleSign) => {
        if (toggleSign !== element.querySelector('.toggle-sign')) {
            toggleSign.textContent = '+'; // Reset other toggle signs to '+'
        }
    });

    // Toggle the clicked section
    const serviceDetails = element.nextElementSibling;
    const toggleSign = element.querySelector('.toggle-sign');

    if (serviceDetails.style.display === 'block') {
        serviceDetails.style.display = 'none';
        toggleSign.textContent = '+';
    } else {
        serviceDetails.style.display = 'block';
        toggleSign.textContent = '-';
    }
}
