// Capturamos el botón y los campos de input
const btnAgregarProducto = document.getElementById('btnAgregarProducto');
const inputs = document.querySelectorAll('input');

// Función para limpiar los campos
function limpiarInputs() {
  inputs.forEach(input => {
    input.value = ''; // Limpiamos el valor de cada input
  });
}

// Función para mostrar la alerta y limpiar los inputs
btnAgregarProducto.addEventListener('click', function() {
  // Mostrar la alerta
  alert('Producto agregado exitosamente');
  
  // Limpiar los campos de input
  limpiarInputs();
});
