function compras(element) {
    const carrito = document.getElementById('carrito');

    // Obtén el valor del producto que se va a agregar al carrito
    const producto = element.value;

    // Lógica para agregar el producto al carrito (puedes personalizarla según tus necesidades)
    if (producto !== null) {
        // Aquí puedes realizar las acciones necesarias para agregar el producto al carrito
        // Por ejemplo, puedes almacenar los productos en un arreglo o enviar una solicitud al servidor

        // Después de agregar el producto al carrito, actualiza el estado del ícono del carrito
        carrito.setAttribute('fill', 'tu-color-preferido');
    }
}