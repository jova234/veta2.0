<?php
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
}
?>
