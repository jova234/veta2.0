// Obtener el elemento del contador
var contadorElement = document.getElementById("contador");

// Obtener los elementos de las barras de la gráfica
var comprasBarra = document.querySelector(".grafica-barra-compras");
var exitosasBarra = document.querySelector(".grafica-barra-exitosas");
var canceladasBarra = document.querySelector(".grafica-barra-canceladas");

// Valores iniciales de las barras de la gráfica
var comprasRealizadas = 0;
var comprasExitosas = 0;
var comprasCanceladas = 0;

// Función para actualizar el contador y la gráfica
function actualizarContadorYGrafica(puntos, estadoCompra) {
    contadorElement.textContent = puntos;

    // Actualizar las barras de la gráfica según el estado de la compra
    if (estadoCompra === "realizada") {
        comprasRealizadas++;
    } else if (estadoCompra === "exitosa") {
        comprasExitosas++;
    } else if (estadoCompra === "cancelada") {
        comprasCanceladas++;
    }

    // Actualizar las alturas de las barras de la gráfica
    comprasBarra.style.height = comprasRealizadas + "px";
    exitosasBarra.style.height = comprasExitosas + "px";
    canceladasBarra.style.height = comprasCanceladas + "px";
}

// Función para simular una compra exitosa (deberás ajustarla según tus necesidades reales)
function simularCompraExitosa() {
    var puntosNuevos = Math.floor(Math.random() * 20) + 1; // Puntos aleatorios entre 1 y 20
    obtenerPuntosDespuesDeCompra(puntosNuevos, "exitosa");
}

// Función para obtener los puntos de descuento después de una compra exitosa
function obtenerPuntosDespuesDeCompra(puntos, estadoCompra) {
    // Aquí simularemos que obtenemos los puntos después de una compra exitosa
    actualizarContadorYGrafica(puntos, estadoCompra);
}

// Llamar a la función para iniciar el proceso de actualización
simularCompraExitosa();
