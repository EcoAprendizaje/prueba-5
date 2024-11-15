
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuButton.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Cerrar menú al hacer click en un enlace (móvil)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            menuButton.textContent = '☰';
        }
    });
});






// Mostrar y ocultar el botón "Ir Arriba" cuando se hace scroll
window.onscroll = function() {
    const botonArriba = document.querySelector('.ir-arriba');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }
};

// Función para hacer scroll hacia arriba
function scrollArriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
