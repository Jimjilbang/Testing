// FAQ Section: Expand/Collapse Answers
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        // Toggle visibility of the answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }

        // Optionally add an "active" class for styling
        question.classList.toggle('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





function toggleDropdown(header) {
    const allHeaders = document.querySelectorAll(".service-header");
    const allDetails = document.querySelectorAll(".service-details");
    const toggleSign = header.querySelector(".toggle-sign");
    const details = header.nextElementSibling;

    // Collapse all other sections
    allDetails.forEach((detail) => {
        if (detail !== details) {
            detail.style.display = "none";
        }
    });

    allHeaders.forEach((hdr) => {
        if (hdr !== header) {
            hdr.querySelector(".toggle-sign").textContent = "+";
        }
    });

    // Toggle current section
    if (details.style.display === "block") {
        details.style.display = "none";
        toggleSign.textContent = "+";
    } else {
        details.style.display = "block";
        toggleSign.textContent = "–";
    }
}

