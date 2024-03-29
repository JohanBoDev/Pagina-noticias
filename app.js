
const abrirMenu = document.querySelector('.icon__menu');
const cerrarMenu = document.querySelector('.icon__menu__close');
const menu = document.querySelector('.nav');
const lista = document.querySelector('.ul');

// Función para abrir el menú
function abrirMenuFunc() {
  menu.classList.add('nav__open');
  menu.style.width = '100%';
  lista.style.transition = 'transform .3s ease-in-out';
  lista.style.transform = 'translateX(0)';
  cerrarMenu.classList.add('icon__menu__close__active');
  abrirMenu.style.display = 'none';
}

// Función para cerrar el menú
function cerrarMenuFunc() {
  menu.style.transition = 'width 1s ease-in-out';
  menu.style.width = '0';
  lista.style.transition = 'transform 1s ease-in-out';
  lista.style.transform = 'translateX(25rem)';
  cerrarMenu.classList.remove('icon__menu__close__active');
  menu.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  abrirMenu.style.display = 'block';
}

// Verificar el ancho de la ventana
function verificarAnchoVentana() {
  if (window.innerWidth <= 899) {
    // Si el ancho de la ventana es máximo 767px, añadir eventos de clic
    abrirMenu.addEventListener('click', abrirMenuFunc);
    cerrarMenu.addEventListener('click', cerrarMenuFunc);
    abrirMenu.style.display = 'block';
  }else {
    // Si el ancho de la ventana es mayor a 899px, eliminar eventos de clic
   abrirMenu.removeEventListener('click', abrirMenuFunc);
    cerrarMenu.removeEventListener('click', cerrarMenuFunc);
    abrirMenu.style.display = 'none';
  } 
}



// Ejecutar la función al cargar la página y cuando se redimensione la ventana
verificarAnchoVentana();
window.addEventListener('resize', verificarAnchoVentana);
