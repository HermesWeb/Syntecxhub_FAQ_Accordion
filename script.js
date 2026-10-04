// 1. Select all the question buttons on the page
const faqQuestions = document.querySelectorAll('.faq-question');

// 2. Loop through each button and attach a click listener
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        
        // 3. Toggle the 'active' class on the parent container (.faq-item)
        // This triggers the CSS we wrote to turn the text blue and spin the "+" to an "x"
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');

        // 4. Find the actual answer div that comes immediately after the clicked button
        const answer = question.nextElementSibling;

        // 5. The Slide Animation Logic
        if (answer.style.maxHeight) {
            // If the answer already has a max-height set, it means it is open.
            // We set it to null to clear the height, which collapses it back to 0.
            answer.style.maxHeight = null;
        } else {
            // If it is closed, we need to open it.
            // .scrollHeight measures the exact height of the text inside the hidden div.
            // We apply that exact pixel height so the CSS transition can slide it open smoothly.
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});