function realizarBusqueda() {
    const busqueda = document.getElementById('busqueda').value.toLowerCase();

    // Obtener todos los elementos que contienen información de los productos y los apartados
    const elementosProductos = document.querySelectorAll('.card-title, .card-text');
    const elementosApartados = document.querySelectorAll('.nav-link');

    // Iterar sobre los elementos de productos y apartados y mostrar u ocultar según coincidan con la búsqueda
    elementosProductos.forEach((elemento) => {
        const textoElemento = elemento.innerText.toLowerCase();
        if (textoElemento.includes(busqueda)) {
            elemento.closest('.card').style.display = 'block';
        } else {
            elemento.closest('.card').style.display = 'none';
        }
    });

    elementosApartados.forEach((elemento) => {
        const textoElemento = elemento.innerText.toLowerCase();
        if (textoElemento.includes(busqueda)) {
            elemento.style.display = 'block';
        } else {
            elemento.style.display = 'none';
        }
    });
}