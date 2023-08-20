document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("enviar").addEventListener("click", function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener los valores de los campos del formulario
        var nombres = document.getElementById("nombre").value;
        var apellidos = document.getElementById("apellido").value;
        var direccion = document.getElementById("direccion").value;
        var estado = document.getElementById("estado").value;
        var municipio = document.getElementById("municipio").value;
        var edad = document.getElementById("edad").value;
        var direccionEntrega = document.getElementById("direccion_entrega").value;

        // Crear un objeto con los datos del formulario
        var datosFormulario = {
            nombres: nombres,
            apellidos: apellidos,
            direccion: direccion,
            estado: estado,
            municipio: municipio,
            edad: edad,
            direccionEntrega: direccionEntrega
        };

        // Llamar a una función para guardar los datos del formulario
        guardarFormulario(datosFormulario);
    });
});

function guardarFormulario(datos) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/guardar-formulario", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("Formulario guardado exitosamente");
                // Aquí puedes realizar acciones adicionales después de guardar el formulario
            } else {
                console.error("Error al guardar el formulario:", xhr.status, xhr.statusText);
                // Aquí puedes mostrar un mensaje de error o realizar otras acciones en caso de error
            }
        }
    };

    xhr.send(JSON.stringify(datos));
}
