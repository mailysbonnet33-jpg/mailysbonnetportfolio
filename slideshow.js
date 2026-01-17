// Gestion du diaporama
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Initialisation - affiche la première image
showSlide(0);

// Change d'image toutes les 5 secondes
setInterval(nextSlide, 4000);

// Animation des lettres qui apparaissent progressivement
function animateText() {
    const textContainer = document.querySelector('.accueil-nom span');
    const words = ['art', 'architecture', 'research'];
    textContainer.innerHTML = '';
    
    let charIndex = 0;
    words.forEach((word, wordIndex) => {
        // Délai de 5 secondes entre chaque mot
        const wordDelay = wordIndex * 4;
        
        // Ajoute chaque lettre du mot
        word.split('').forEach((char, letterIndex) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.className = 'wave-letter';
            span.style.animationDelay = `${wordDelay + (letterIndex * 0.1)}s`;
            textContainer.appendChild(span);
        });
        
        // Ajoute un espace entre les mots (sauf après le dernier)
        if (wordIndex < words.length - 1) {
            const space = document.createElement('span');
            space.textContent = '\u00A0\u00A0\u00A0'; // 3 espaces insécables
            space.className = 'wave-letter';
            space.style.opacity = '1'; // L'espace est toujours visible
            textContainer.appendChild(space);
        }
    });
}

// Lance l'animation au chargement
window.addEventListener('load', () => {
    animateText();
    
    // Relance l'animation toutes les 20 secondes (3 mots × 5s + 5s de pause)
    setInterval(() => {
        animateText();
    }, 20000);
});