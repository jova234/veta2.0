// Obtener el elemento del contador
var contadorElement = document.getElementById("contador");

// Establecer los valores mínimos y máximos del contador
var puntosMinimos = 0;
var puntosMaximos = 100;
var puntosActuales = puntosMinimos;

// Función para actualizar el contador
function actualizarContador() {
    contadorElement.textContent = puntosActuales;

    // Si aún no se ha alcanzado el máximo, aumentar el contador
    if (puntosActuales < puntosMaximos) {
        puntosActuales++;
        setTimeout(actualizarContador, 50); // Actualizar cada 50 ms (ajusta según tu preferencia)
    }
}

// Llamar a la función para iniciar el proceso de actualización
actualizarContador();
// Función para actualizar el contador y la gráfica
function actualizarContadorYGrafica(puntos) {
    contadorElement.textContent = puntos;
    // Aquí actualiza tu gráfica de porcentaje de puntos de descuento usando una librería de gráficos como Chart.js
}

// Función para obtener los puntos de descuento después de una compra exitosa
function obtenerPuntosDespuesDeCompra() {
    // Realizar una petición AJAX para obtener los puntos después de una compra exitosa
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "ruta_a_tu_archivo_php.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var puntosNuevos = parseInt(xhr.responseText);
            if (!isNaN(puntosNuevos)) {
                actualizarContadorYGrafica(puntosNuevos);
            }
        }
    };
    xhr.send();
}
// Crear un elemento canvas para la gráfica
var graficaCanvas = document.createElement("canvas");
graficaCanvas.width = 200;
graficaCanvas.height = 200;

// Agregar la gráfica al DOM (ajusta según la estructura de tu página)
var contenedorGrafica = document.createElement("div");
contenedorGrafica.style.textAlign = "left";
contenedorGrafica.style.display = "inline-block";
contenedorGrafica.appendChild(graficaCanvas);
document.body.appendChild(contenedorGrafica);

// Crear y configurar la gráfica usando Chart.js
var ctx = graficaCanvas.getContext("2d");
var porcentajePuntos = 50; // Ejemplo, reemplaza con el porcentaje real
var data = {
    datasets: [{
        data: [porcentajePuntos, 100 - porcentajePuntos],
        backgroundColor: ["#36A2EB", "#EAEAEA"]
    }],
    labels: ["Porcentaje Puntos", "Restante"]
};
var config = {
    type: "doughnut",
    data: data
};
new Chart(ctx, config);
