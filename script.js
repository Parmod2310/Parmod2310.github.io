console.log("Portfolio loaded!");

// Ensure heroImage is selected before use
const heroImage = document.querySelector(".hero-image img");

// Check if the heroImage element exists before adding event listeners
if (heroImage) {
  heroImage.addEventListener("mouseenter", () => {
    heroImage.style.transition = "box-shadow 0.3s ease";
    heroImage.style.boxShadow = "0 0 40px rgba(0, 229, 255, 0.8), 0 0 80px rgba(0, 229, 255, 0.5)";
  });

  heroImage.addEventListener("mouseleave", () => {
    heroImage.style.transition = "box-shadow 0.3s ease";
    heroImage.style.boxShadow = "0 0 20px rgba(0, 229, 255, 0.5)";
  });
}

// Ensure aboutImage is selected before use
document.addEventListener("DOMContentLoaded", () => {
  const aboutImage = document.querySelector(".about-image img");

  if (aboutImage) {
    aboutImage.addEventListener("mouseover", () => {
      aboutImage.style.transition = "transform 0.3s ease";
      aboutImage.style.transform = "scale(1.05)";
    });

    aboutImage.addEventListener("mouseout", () => {
      aboutImage.style.transition = "transform 0.3s ease";
      aboutImage.style.transform = "scale(1)";
    });
  }

  console.log("About Me section with interactive image loaded!");
});

// Function to create particles inside the Navbar
function createNavbarParticles(navbar) {
  const particlesContainer = document.createElement('div');
  particlesContainer.classList.add('navbar-particles');
  navbar.appendChild(particlesContainer);

  // Generate random particles inside the navbar
  for (let i = 0; i < 80; i++) { // You can adjust the number of particles as needed
    const particle = document.createElement('div');
    particle.classList.add('navbar-particle');
    
    // Random size for the particles between 2px and 4px
    const size = Math.random() * 2 + 2;
    
    // Random position within the navbar (width and height between 0% and 100%)
    const top = Math.random() * 100;  // Vertical position (0% to 100% of navbar height)
    const left = Math.random() * 100; // Horizontal position (0% to 100% of navbar width)
    
    // Randomize animation duration (between 6s to 12s) for each particle
    const duration = Math.random() * 2 + 2;

    // Set particle properties
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.top = `${top}%`;
    particle.style.left = `${left}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`; // Randomize start delay

    particlesContainer.appendChild(particle);
  }
}

// Initialize particles for the navbar
const navbar = document.querySelector('.navbar');
if (navbar) {
  createNavbarParticles(navbar);
}

// Sticky Navbar Functionality
window.onscroll = function () {
  stickyNavbar();
};

const sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Function to create particles inside each About Card
function createParticlesAboutCard(card) {
  const particlesContainer = document.createElement('div');
  particlesContainer.classList.add('particles');
  card.appendChild(particlesContainer);

  // Generate random particles for each card
  for (let i = 0; i < 50; i++) { // You can adjust the number of particles here
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size for the particles between 4px and 8px
    const size = Math.random() * 1 + 1;
    
    // Random position within the card (width and height between 0% and 100%)
    const top = Math.random() * 100;   // Vertical position (0% to 100% of card height)
    const left = Math.random() * 100;  // Horizontal position (0% to 100% of card width)
    
    // Randomize animation duration (between 6s to 10s) for each particle
    const duration = Math.random() * 2 + 2;

    // Set particle properties
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.top = `${top}%`;
    particle.style.left = `${left}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`; // Randomize start delay

    particlesContainer.appendChild(particle);
  }
}

// Initialize particles for each about card
const aboutCards = document.querySelectorAll('.about-card');
aboutCards.forEach(createParticlesAboutCard);

// Animate Cards on Scroll
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  window.addEventListener("scroll", function () {
    cards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect();
      if (cardPosition.top < window.innerHeight && cardPosition.bottom > 0) {
        card.classList.add("animate-card");
      }
    });
  });
});

// Scroll Animation for the Skills Section
const skillsSection = document.querySelector('.skills-section');

window.addEventListener('scroll', () => {
  const sectionPosition = skillsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;
  if (sectionPosition < screenPosition) {
    skillsSection.classList.add('visible');
  }
});

// Scroll Animation for Each Skill Box
const skillBoxes = document.querySelectorAll('.skill-box');
skillBoxes.forEach((box) => {
  box.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
});

window.addEventListener('scroll', () => {
  skillBoxes.forEach((box) => {
    const boxPosition = box.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    if (boxPosition < screenPosition) {
      box.style.opacity = 1;
      box.style.transform = 'translateY(0)';
    } else {
      box.style.opacity = 0;
      box.style.transform = 'translateY(20px)';
    }
  });
});

// Add Particles to Each Skill Box
function createParticles(box) {
  const particlesContainer = document.createElement('div');
  particlesContainer.classList.add('particles');
  box.appendChild(particlesContainer);

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 1 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = Math.random() * 2 + 2;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.top = `${top}%`;
    particle.style.left = `${left}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`;

    particlesContainer.appendChild(particle);
  }
}

skillBoxes.forEach(createParticles);


// Function to create particles inside each Experience Card
function createParticles(card) {
  const particlesContainer = document.createElement('div');
  particlesContainer.classList.add('particles');
  card.appendChild(particlesContainer);

  // Generate random particles for each card
  for (let i = 0; i < 60; i++) { // Adjust the number of particles as needed
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size for the particles between 4px and 10px
    const size = Math.random() * 1 + 1; 
    
    // Random position within the card (width and height between 0% and 100%)
    const top = Math.random() * 100;   // Vertical position (0% to 100% of card height)
    const left = Math.random() * 100;  // Horizontal position (0% to 100% of card width)
    
    // Randomize animation duration (between 6s to 10s) for each particle
    const duration = Math.random() * 2 + 2;

    // Set particle properties
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.top = `${top}%`;
    particle.style.left = `${left}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`; // Randomize start delay

    particlesContainer.appendChild(particle);
  }
}

// Initialize particles for each experience card
const experienceCards = document.querySelectorAll('.card');
experienceCards.forEach(createParticles);

// Function to create particles inside each Project Card (below the image part)
function createProjectParticles(card) {
  const particlesContainer = document.createElement('div');
  particlesContainer.classList.add('particles');
  card.appendChild(particlesContainer);

  // Get the height of the remaining part (below the image)
  const cardImage = card.querySelector('.project-card img');  // Select the image inside the card
  const cardInfo = card.querySelector('.project-info');  // The part below the image where the particles will go
  const cardImageHeight = cardImage.offsetHeight;
  const cardInfoHeight = cardInfo.offsetHeight;

  // Calculate the remaining height for particles (below the image and above the card info)
  const remainingHeight = card.offsetHeight - cardImageHeight - cardInfoHeight;

  // Generate random particles inside the remaining part of the project card
  for (let i = 0; i < 50; i++) { // Adjust the number of particles as needed
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size for the particles between 4px and 10px
    const size = Math.random() * 1 + 2; 
    
    // Random position within the remaining area of the card (width 100%, height within the remaining part)
    const top = Math.random() * remainingHeight;   // Vertical position (within the remaining height)
    const left = Math.random() * 100;  // Horizontal position (0% to 100% of card width)
    
    // Randomize animation duration (between 6s to 10s) for each particle
    const duration = Math.random() * 2 + 2;

    // Set particle properties
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.top = `${top}px`;
    particle.style.left = `${left}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`; // Randomize start delay

    particlesContainer.appendChild(particle);
  }
}

// Initialize particles for each project card
const projectCards = document.querySelectorAll('.project');
projectCards.forEach(createProjectParticles);

// GitHub Button Functionality - Open GitHub Link
function openGitHub(url) {
  window.open(url, "_blank");
}

// Form Submission via WhatsApp
emailjs.init('hB55jgu9TJxPW1dLp');

// Function to send the form data
function sendForm(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !phone || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Send Email using EmailJS
  emailjs.send("service_mn3tnpz", "template_g8a55z1", {
      from_name: name,
      from_email: email,
      phone_number: phone,
      subject: subject,
      message: message,
    })
    .then(() => {
      alert("Thank you! Your details have been submitted successfully.");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("An error occurred while submitting your details. Please try again.");
    });

  // Reset Form
  document.querySelector("form").reset();
}

// Attach Event Listener to Form
const form = document.querySelector("form");
form.addEventListener("submit", sendForm);


