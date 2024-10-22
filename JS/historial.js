// Datos de inventario por fecha
const inventarioPorFecha = {
    "5/2/2024": [
      { nombre: "Tomate", fechaCompra: "5/2/2024", precioProveedor: "120.000", cantidad: 6 },
      { nombre: "Limón", fechaCompra: "5/2/2024", precioProveedor: "30.000", cantidad: 15 },
      { nombre: "Papa", fechaCompra: "5/2/2024", precioProveedor: "150.000", cantidad: 12 }
    ],
    "30/4/2024": [
      { nombre: "Zanahoria", fechaCompra: "30/4/2024", precioProveedor: "50.000", cantidad: 10 },
      { nombre: "Cebolla", fechaCompra: "30/4/2024", precioProveedor: "25.000", cantidad: 8 }
    ],
    "13/5/2024": [
      { nombre: "Tomate", fechaCompra: "13/5/2024", precioProveedor: "130.000", cantidad: 7 },
      { nombre: "Lechuga", fechaCompra: "13/5/2024", precioProveedor: "40.000", cantidad: 20 }
    ],
    "20/7/2024":[
        { nombre: "Tomate", fechaCompra: "13/5/2024", precioProveedor: "100.000", cantidad: 8 },
        { nombre: "Lechuga", fechaCompra: "13/5/2024", precioProveedor: "50.000", cantidad: 19 },
        { nombre: "cebolla", fechaCompra: "13/4/2024", precioProveedor: "23.000", cantidad: 5 }

    ]
    // Agrega más fechas con sus respectivos productos
  };
  
  // Función para actualizar la tabla de productos según la fecha seleccionada
  function actualizarTablaProductos(fecha) {
    const productos = inventarioPorFecha[fecha] || [];
    const tbodyProductos = document.querySelector('.table-primary tbody');
    tbodyProductos.innerHTML = ''; // Limpiar tabla de productos
  
    productos.forEach(producto => {
      const fila = document.createElement('tr');
  
      fila.innerHTML = `
        <td><h4>${producto.nombre}</h4></td>
        <td><h4>${producto.fechaCompra}</h4></td>
        <td><h4>${producto.precioProveedor}</h4></td>
        <td><h4>${producto.cantidad}</h4></td>
      `;
  
      tbodyProductos.appendChild(fila);
    });
  }
  
  // Función para manejar el clic en una fecha
  function agregarEventosFechas() {
    const filasFechas = document.querySelectorAll('.table-success tbody tr');
  
    filasFechas.forEach(fila => {
      fila.addEventListener('click', function() {
        const fechaSeleccionada = this.textContent.trim(); // Obtener la fecha de la fila
        actualizarTablaProductos(fechaSeleccionada); // Actualizar la tabla de productos
      });
    });
  }
  
  // Inicializar los eventos al cargar la página
  document.addEventListener('DOMContentLoaded', agregarEventosFechas);