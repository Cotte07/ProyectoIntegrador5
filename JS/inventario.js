// Array de objetos que representan los productos
const inventario = [
    {
      nombre: "Manzana",
      cantidadInicial: 100,
      medida: "kg",
      precioProveedor: "$50.000",
      fechaCompra: "2024-10-01",
      proveedor: "Frutas ABC",
      lote: "1",
      estado: "Fresco",
      tiempoBodega: "2 días"
    },
    {
        nombre: "Manzana",
        cantidadInicial: 110,
        medida: "kg",
        precioProveedor: "$51.000",
        fechaCompra: "2024-10-05",
        proveedor: "Frutas ABC",
        lote: "2",
        estado: "Fresco",
        tiempoBodega: "2 días"
    },
    {
      nombre: "Pera",
      cantidadInicial: 50,
      medida: "kg",
      precioProveedor: "$73.000",
      fechaCompra: "2024-10-05",
      proveedor: "Verduras XYZ",
      lote: "1",
      estado: "Maduro",
      tiempoBodega: "5 días"
    },
    {
      nombre: "Platano",
      cantidadInicial: 200,
      medida: "kg",
      precioProveedor: "$45.500",
      fechaCompra: "2024-10-10",
      proveedor: "Tropicales SA",
      lote: "1",
      estado: "Verde",
      tiempoBodega: "1 día"
    }
  ];
  
// Función para llenar la tabla con productos (puedes reutilizar esta función)
function llenarTabla(productos) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";  // Limpiar tabla antes de agregar nuevos datos
  
    productos.forEach(producto => {
      const fila = document.createElement("tr");
  
      fila.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.cantidadInicial}</td>
        <td>${producto.medida}</td>
        <td>${producto.precioProveedor}</td>
        <td>${producto.fechaCompra}</td>
        <td>${producto.proveedor}</td>
        <td>${producto.lote}</td>
        <td>${producto.estado}</td>
        <td>${producto.tiempoBodega}</td>
      `;
  
      tbody.appendChild(fila);
    });
  }
  
  // Función para buscar productos por nombre
  function buscarProducto(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
  
    const inputBusqueda = document.querySelector("input[type='search']").value.toLowerCase(); // Convertir a minúsculas
    const productosFiltrados = inventario.filter(producto =>
      producto.nombre.toLowerCase().includes(inputBusqueda) // Filtrar por coincidencia parcial
    );
  
    llenarTabla(productosFiltrados);
  }
  
  // Llenar la tabla con todos los productos cuando se carga la página
  document.addEventListener("DOMContentLoaded", () => llenarTabla(inventario));
  
  // Evento para la búsqueda
  const formularioBusqueda = document.querySelector("form");
  formularioBusqueda.addEventListener("submit", buscarProducto);