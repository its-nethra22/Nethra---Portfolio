}
   // Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal animation on scroll
const cards = document.querySelectorAll('.card, .skill-box');

function revealCards() {
    const trigger = window.innerHeight - 100;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < trigger) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}

// Initial styles
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

// Typing effect for hero title
const text = "B.Sc. Computer Science with Data Analytics Student";
let i = 0;

const subtitle = document.querySelector(".hero h3");

subtitle.textContent = "";

function typeWriter() {
    if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
    }
}

window.onload = () => {
    revealCards();
    typeWriter();
};