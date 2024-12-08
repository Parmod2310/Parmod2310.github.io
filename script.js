document.addEventListener("DOMContentLoaded", function () {
    // Typing animation for different roles, now including LLM & RAG
    const words = [
        "Data Scientist",
        "Machine Learning Engineer",
        "AI Researcher",
        "Generative AI Specialist",
        "LLM & RAG Expert",
        "OpenAI Enthusiast"
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const newWordDelay = 2000;

    // Typing function to type out words one by one
    function type() {
        if (charIndex < words[wordIndex].length) {
            currentWord += words[wordIndex].charAt(charIndex);
            document.querySelector('.typing-animation').textContent = currentWord;
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newWordDelay); // After typing, start erasing after a delay
        }
    }

    // Erasing function to remove the typed characters
    function erase() {
        if (charIndex > 0) {
            currentWord = currentWord.slice(0, -1); // Remove the last character
            document.querySelector('.typing-animation').textContent = currentWord;
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length; // Cycle through words
            setTimeout(type, typingSpeed + 1100); // Add a slight delay before typing the next word
        }
    }

    // Start typing animation
    type();

    // Smooth scroll for Hire Me and Let's Talk buttons
    const hireButton = document.querySelector('.hire');
    const talkButton = document.querySelector('.talk');

    hireButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = "mailto:p921035@gmail.com";
    });

    talkButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.open("https://www.linkedin.com/in/parmod2310", "_blank");
    });

    // Contact form submission with WhatsApp redirection
    const form = document.getElementById('contact-form');
    
    // Listen for form submit event
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Create WhatsApp message URL
        const whatsappMessage = `
            *New Contact Message*%0A
            *Name*: ${name}%0A
            *Email*: ${email}%0A
            *Phone*: ${phone}%0A
            *Subject*: ${subject}%0A
            *Message*: ${message}
        `;
        
        // WhatsApp API URL
        const whatsappURL = `https://wa.me/919850094508?text=${encodeURIComponent(whatsappMessage)}`;

        // Open WhatsApp with the pre-filled message
        window.open(whatsappURL, '_blank');
    });
});
