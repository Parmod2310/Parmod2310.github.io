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

    function type() {
        if (charIndex < words[wordIndex].length) {
            currentWord += words[wordIndex].charAt(charIndex);
            document.querySelector('.typing-animation').textContent = currentWord;
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newWordDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            currentWord = currentWord.slice(0, -1);
            document.querySelector('.typing-animation').textContent = currentWord;
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed + 1100);
        }
    }

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
});
