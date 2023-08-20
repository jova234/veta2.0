<?php
<<<<<<< HEAD
// Verificar si la solicitud es POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recuperar los datos enviados como JSON y decodificarlos
    $datosJSON = file_get_contents("php://input");
    $datos = json_decode($datosJSON, true);

    // Validar si los campos están cargados
    $errores = [];
    if (empty($datos["nombres"])) {
        $errores[] = "El campo 'nombres' está vacío";
    }
    if (empty($datos["apellidos"])) {
        $errores[] = "El campo 'apellidos' está vacío";
    }
    // Repite esto para los demás campos...

    if (empty($errores)) {
        // Los datos están cargados y válidos
        // Ahora puedes guardarlos en la base de datos o hacer lo que necesites
        echo "Datos válidos, se pueden guardar en la base de datos.";
    } else {
        // Hay campos vacíos, mostrar errores
        echo "Errores encontrados:<br>";
        foreach ($errores as $error) {
            echo $error . "<br>";
        }
    }
} else {
    echo "Método de solicitud no permitido";
=======
// Verificar si se recibió una solicitud POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    // Obtén los otros campos del formulario de la misma manera y asígnalos a las variables correspondientes

    // Conexión a la base de datos de XAMPP
    $servername = "localhost"; // Cambia esto si tu servidor MySQL tiene una dirección IP diferente
    $username = "nombre_de_usuario"; // Cambia esto por el nombre de usuario de tu base de datos de XAMPP
    $password = "contraseña"; // Cambia esto por la contraseña de tu base de datos de XAMPP
    $dbname = "nombre_de_la_base_de_datos"; // Cambia esto por el nombre de tu base de datos de XAMPP

    // Crear la conexión
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Preparar y ejecutar la consulta para insertar los datos en la base de datos
    $stmt = $conn->prepare("INSERT INTO tabla_de_datos (nombre, apellido) VALUES (?, ?)");
    $stmt->bind_param("ss", $nombre, $apellido);
    // Asigna los otros campos del formulario a la consulta SQL de manera similar

    if ($stmt->execute()) {
        // Los datos se han insertado correctamente
        echo "¡Gracias por registrarte!";
    } else {
        // Ocurrió un error al insertar los datos
        echo "Error al enviar los datos. Por favor, inténtalo de nuevo más tarde.";
    }

    // Cerrar la conexión
    $stmt->close();
    $conn->close();
>>>>>>> 3aa2c6351a644b2f6f0607055eedaa0f2b48eb93
}
?>
