const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

setInterval(() => {
    // Oculta slide actual
    slides[currentSlide].classList.remove('opacity-100', 'z-10');
    slides[currentSlide].classList.add('opacity-0', 'z-0');

    // Avanza al siguiente
    currentSlide = (currentSlide + 1) % slides.length;

    // Muestra el nuevo slide
    slides[currentSlide].classList.remove('opacity-0', 'z-0');
    slides[currentSlide].classList.add('opacity-100', 'z-10');
}, 2000);

function toggleCard(button) {
    const svg = button.querySelector(".chevron");
    const card = button.closest("div").parentElement;
    const content = card.querySelector(".card-content");

    // Toggle contenido
    content.classList.toggle("hidden");

    // Rotar el ícono
    svg.classList.toggle("rotate-180");
}