// Acceder al elemento select
var selectDepartamento = document.getElementById('departamento');
var selectGenero = document.getElementById('genero');
var selectEducacion = document.getElementById('educacion');

// Manejar el envío del formulario
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar la recarga de la página

    // Obtener el valor seleccionado
    var seleccionado = selectDepartamento.value;
    var seleccionado2 = selectGenero.value;
    var seleccionado3 = selectEducacion.value;

    // Realizar alguna acción con el valor seleccionado
    alert("Departamento seleccionado: " + seleccionado + "\nGenero seleccionado: " + seleccionado2 + "\nEducacion seleccionada: "+seleccionado3);
});