
// MENU =====================================
const menu = document.getElementById('menu');
menu.className = 'menu';

const lgoContainer = document.getElementById('logo-cont'); // Contenedor del logo
lgoContainer.className = 'logo-cont'
//..........//
const lgoText = document.getElementById('text-logo'); // Texto del logo
lgoText.className = 'logo-text';
//..........//
const lgoImage = document.getElementById('image-logo'); // Imagen del logo
lgoImage.className = 'logo-image';
//..........//
document.addEventListener('DOMContentLoaded', function() {
    const botonesMenu = document.querySelectorAll('.btn-menu'); // BOTONES DEL MENU
    const secciones = document.querySelectorAll('.seccion-contenido'); // SECCIONES
    //
    function cambiarSeccion(idSeccion) {
        secciones.forEach(seccion => {
            seccion.classList.remove('active');
        });
        // 
        const seccionActiva = document.getElementById(idSeccion);
        if (seccionActiva) {
            seccionActiva.classList.add('active');
        }
        //
        botonesMenu.forEach(boton => {
            boton.classList.remove('active');
            if (boton.getAttribute('data-section') === idSeccion) {
                boton.classList.add('active');
            }
        });
    }
    //
    botonesMenu.forEach(boton => {
        boton.addEventListener('click', function() {
            const seccionId = this.getAttribute('data-section');
            cambiarSeccion(seccionId);
        });
    });
    cambiarSeccion('cards');
    
    const botonesCards = document.querySelectorAll('.cards-select');
});