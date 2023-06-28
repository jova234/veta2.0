const carrito = document.getElementById('carrito');

// Ejemplo de variable que indica si el carrito está vacío o no
const carritoVacio = false;

// Función para actualizar el estado del ícono del carrito
function actualizarIconoCarrito() {
	if (carritoVacio) {
		carrito.setAttribute('fill', 'currentColor');
	} else {
		carrito.setAttribute('fill', 'tu-color-preferido');
	}
}

// Llama a la función para actualizar el estado inicial del ícono del carrito
actualizarIconoCarrito();
