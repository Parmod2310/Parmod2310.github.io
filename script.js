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

    // Type function that types out the current word
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

    // Erase function that deletes the typed word
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

    // Display a brief intro to your projects involving OpenAI and RAG
    const introText = `
        In my experience, I have worked extensively with technologies like OpenAI's GPT models, 
        leveraging **LLM (Large Language Models)** and **RAG (Retrieval-Augmented Generation)** 
        techniques to build innovative AI solutions. These models have enhanced my ability to automate 
        tasks, analyze vast datasets, and improve performance in AI applications.
    `;
    const introElement = document.querySelector('.intro-text p');
    if (introElement) {
        introElement.innerHTML += `<br/><br/>${introText}`;
    }

    // Animate progress bars once the document is loaded
    const progressBars = document.querySelectorAll('.progress-done');
    progressBars.forEach(bar => {
        setTimeout(() => {
            bar.style.width = bar.getAttribute('data-done') + '%'; // Set the width to the percentage value from data-done
            bar.style.opacity = 1; // Fade in the bar
        }, 500);
    });

    // Animate circular skill indicators, now include LLM, RAG, OpenAI
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        let percent = circle.getAttribute('data-percent');
        let skill = circle.getAttribute('data-skill');
        
        // Display specific skills like LLM and OpenAI
        if (skill && skill.toLowerCase().includes('llm') || skill.toLowerCase().includes('rag') || skill.toLowerCase().includes('openai')) {
            circle.style.setProperty('--percent', percent);
            circle.innerHTML = `${skill} <br> ${percent}%`; // Adding percentage dynamically
        }
    });

    // Show specific skills for LLM & RAG technologies on hover or scroll
    const skillSection = document.querySelector('#skills');
    skillSection.addEventListener('mouseenter', function () {
        const llmSkills = [
            'Large Language Models (LLM)',
            'RAG (Retrieval-Augmented Generation)',
            'OpenAI GPT models',
            'Deep Learning Frameworks (TensorFlow, PyTorch)'
        ];

        let skillsList = '';
        llmSkills.forEach(skill => {
            skillsList += `<li>${skill}</li>`;
        });

        const llmSkillsContainer = document.querySelector('.skills-container');
        llmSkillsContainer.innerHTML += `<div class="llm-skills"><h4>LLM & RAG Technologies</h4><ul>${skillsList}</ul></div>`;
    });

    // Hide LLM skills container when mouse leaves the section
    skillSection.addEventListener('mouseleave', function () {
        const llmSkillsContainer = document.querySelector('.llm-skills');
        if (llmSkillsContainer) {
            llmSkillsContainer.remove();
        }
    });
});
