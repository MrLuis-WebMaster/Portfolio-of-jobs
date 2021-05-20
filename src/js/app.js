let pagina = 2;
const grid = new Muuri('.grid', {
    layout: {
      rounding: true
    }
}); 
window.addEventListener('load', function () {
    grid.refreshItems().layout();
    document.body.classList.add('images-loaded');
  });
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".loader").classList.toggle("loader2");

    cambiarseccion ();
    DarkMode();
    galeria();
    VentanaModal();
    CerrarVentana();
    
});
function DarkMode () {
    const btnMode = document.querySelector('#btn_mode');
    btnMode.addEventListener('click',function changeMode() {
        btnMode.classList.toggle('btn-mode--dark-mode');
        document.body.classList.toggle('dark-mode');
} );
}
function galeria () {
    const galleryNav = document.querySelector('#categorias');
    galleryNav.addEventListener('click', function filtradoGaleria(e) {
        e.preventDefault();
        let enlace = e.target;
        document.querySelector('.nav-gallery__enlace--active').classList.remove('nav-gallery__enlace--active');
        enlace.classList.add('nav-gallery__enlace--active');
        let categoria = enlace.innerHTML.toLowerCase();
        categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);   

    });
}
function VentanaModal () {
    const overlay = document.querySelector("#overlay");
    const imagenes = document.querySelectorAll(".grid .item .item-content img");
    imagenes.forEach(( elemento => {
        const ruta = elemento.getAttribute('src');
        const descripcion = elemento.parentNode.parentNode.dataset.description;
        elemento.addEventListener("click", function(){
            overlay.classList.add("overlay-active");
            document.querySelector('#overlay img').src = ruta;
            document.querySelector('#overlay .descripcion').innerHTML = descripcion;
        })
    }));

 

}
function CerrarVentana () {
    const overlay = document.querySelector("#overlay");
    const boton = document.querySelector('#overlay__contenedor--boton')
    boton.addEventListener("click", () => {
		overlay.classList.remove('overlay-active');
	});

    overlay.addEventListener('click', e => {
		e.target.id === 'overlay' ? overlay.classList.remove('overlay-active') : '';
	});
}
function mostrarseccion () {
    //Eliminar mostrar seccion
    const seccionAnterior = document.querySelector(".show");
    if (seccionAnterior) {
        seccionAnterior.classList.remove("show");
    }
    const seccionActual = document.querySelector(`#paso${pagina}`);
    seccionActual.classList.add('show');
} 
function cambiarseccion () {
    const enlaces = document.querySelectorAll(".main-nav a");
    enlaces.forEach( enlace => {
        enlace.addEventListener("click", e => {
            e.preventDefault();
            pagina = parseInt (e.target.dataset.paso);
            mostrarseccion ();
        })
    } )
}