// El mismo array de inventario que utilizas para la tabla del inventario principal
const inventario = [
    {
      nombre: "Manzana",
    },
    {
      nombre: "Pera",
    },
    {
      nombre: "Platano",
    }
  ];
  
  // Función para llenar la tabla de selección de productos con checkboxes
  function llenarTablaSeleccion() {
    const tbodySeleccion = document.getElementById('productos-lista');
    tbodySeleccion.innerHTML = ''; // Limpiar el contenido actual
  
    // Crear una fila con checkbox para cada producto en el inventario
    inventario.forEach((producto, index) => {
      const fila = document.createElement('tr');
  
      fila.innerHTML = `
        <td><input class="check-input" type="checkbox" name="producto" value="${producto.nombre}" id="producto${index}"></td>
        <td><h3>${producto.nombre}</h3></td>
      `;
  
      tbodySeleccion.appendChild(fila);
    });
  }
  
  // Función para eliminar los productos seleccionados
  function eliminarProductosSeleccionados() {
    const checkboxesSeleccionados = document.querySelectorAll('input[type="checkbox"]:checked');
  
    checkboxesSeleccionados.forEach(checkbox => {
      const fila = checkbox.closest('tr');
      fila.remove();
    });
  }
  
  // Llenar la tabla de selección al cargar la página
  document.addEventListener('DOMContentLoaded', llenarTablaSeleccion);
  
  // Agregar evento al botón de eliminar
  document.getElementById('eliminarSeleccionados').addEventListener('click', eliminarProductosSeleccionados);
  