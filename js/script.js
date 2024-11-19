document.addEventListener("DOMContentLoaded", () => {
    // Handle "FLOW" appearing first
    const flowTitle = document.querySelector('.flow-title');
    flowTitle.classList.add('visible'); // "FLOW" becomes visible immediately

    // Add a delay for the rest of the content
    setTimeout(() => {
        const surfaceContent = document.querySelector('.surface-content');
        surfaceContent.classList.add('visible'); // Make content below FLOW visible
    }, 1000); // Adjust delay (1 second)

    // Handle scrolling animations for other hidden elements
    const hiddenElements = document.querySelectorAll('.hidden:not(.flow-title):not(.surface-content)');
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
});



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

document.addEventListener("DOMContentLoaded", function () {
    const bubbleContainer = document.querySelector(".bubbles");
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
});





function toggleDropdown(element) {
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
