document.getElementById("enviar").addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos del formulario
    var nombres = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellido").value;
    var direccion = document.getElementById("direccion").value;
    var estado = document.getElementById("opciones").value;
    var municipio = document.getElementById("municipio").value;
    var edad = document.getElementById("edades_option").value;
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

function guardarFormulario(datos) {
    // Aquí puedes hacer una petición AJAX a tu backend para guardar los datos
    // Puedes utilizar librerías como Axios o el objeto XMLHttpRequest

    // Por ejemplo, utilizando Axios
    axios.post('/api/guardar-formulario', datos)
        .then(function (response) {
            console.log("Formulario guardado exitosamente");
            // Aquí puedes realizar acciones adicionales después de guardar el formulario
        })
        .catch(function (error) {
            console.error("Error al guardar el formulario:", error);
            // Aquí puedes mostrar un mensaje de error o realizar otras acciones en caso de error
        });
}