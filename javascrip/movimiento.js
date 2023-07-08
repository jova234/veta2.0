document.addEventListener('DOMContentLoaded', function () {
	// Función para actualizar el estado del ícono del carrito
	function actualizarIconoCarrito() {
		const carrito = document.getElementById('pintarCarrito');

		// Ejemplo de variable que indica si el carrito está vacío o no
		const carritoVacio = false;

		if (carritoVacio) {
			carrito.setAttribute('fill', 'currentColor');
		} else {
			carrito.setAttribute('fill', 'red');
		}
	}

	// Llama a la función para actualizar el estado inicial del ícono del carrito
	actualizarIconoCarrito();

	// Agregar evento al botón "Agregar al Carrito"
	const agregarCarritoButtons = document.querySelectorAll('.card-link#comprar');
	agregarCarritoButtons.forEach(function (button) {
		button.addEventListener('click', function () {
			// Lógica para agregar el producto al carrito
			// ...

			// Actualizar el estado del ícono del carrito después de agregar
			actualizarIconoCarrito();
		});
	});

	// Resto de tu código...
});

function compras() {
	const comprar = document.getElementById('comprar'); // Quita el símbolo # del ID

	if (comprar != null) {
		actualizarIconoCarrito();
		// comprar.innerHTML = "";
	} else {
		alert("No has agregado ningún producto"); // Corrige el mensaje de alerta
	}
}

function verProducto() {
	const verProducto = document.getElementById('verProducto'); // Quita el símbolo # del ID
	try {
		if (verProducto != null) {
			actualizarIconoCarrito();
			// verProducto.innerHTML = "";
		} else {
			alert("No puedes ver el producto seleccionado"); // Corrige el mensaje de alerta
		}
	} catch (error) {
		// Manejo del error
	}
}
