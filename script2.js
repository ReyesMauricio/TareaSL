// Obtener todos los elementos de entrada y select
var elementos = document.querySelectorAll('input, select');

// Agregar un controlador de eventos para cada elemento
elementos.forEach(function(elemento) {
    elemento.addEventListener('input', function() {
        if (elemento.value.trim() === '') {
            elemento.classList.add('input-empty');
            elemento.classList.remove('input-filled');
        } else {
            elemento.classList.remove('input-empty');
            elemento.classList.add('input-filled');
        }
    });
});
