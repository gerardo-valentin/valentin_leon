const imagen1 = document.getElementById('imagen1');
const imagen2=document.getElementById('proyecto1');
const imagen3 = document.getElementById('proyecto2');
const imagen4 = document.getElementById('proyecto3');
const imagen5 = document.getElementById('proyecto4');
const imagen6 = document.getElementById('proyecto5');
const imagen10 = document.getElementById('proyecto10');
// aqui ya le estoy dando los movimientos  o defino la imangen  
const cargarImagen = (entradas, observador) => {
	
	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('visible');
		} else {
			entrada.target.classList.remove('visible');
		}
	});
}

// se crea la opcion observador
const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '100px 0px 50px 0px',
	threshold: 1.0
});

observador.observe(imagen1);
observador.observe(imagen2);
observador.observe(imagen3);
observador.observe(imagen4);
observador.observe(imagen5);
observador.observe(imagen6);
observador.observe(imagen10);
