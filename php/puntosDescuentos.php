<?php
// Verificar si el usuario es un miembro
function esMiembro($usuario)
{
    // Aquí debes implementar la lógica para verificar si el usuario es un miembro.
    // Puedes utilizar una base de datos o cualquier otro método de autenticación.

    // En este ejemplo, asumiremos que el usuario es un miembro.
    $esMiembro = true;

    return $esMiembro;
}

// Obtener puntos de descuento basado en el monto de la compra
function obtenerPuntosDescuento($montoCompra)
{
    $puntosMinimos = 5;
    $puntosMaximos = 50;
    $puntosPorCompra = floor($montoCompra / 700);

    // Limitar los puntos de descuento dentro del rango mínimo y máximo
    $puntosDescuento = min(max($puntosPorCompra, $puntosMinimos), $puntosMaximos);

    return $puntosDescuento;
}

// Ejemplo de uso:
$usuarioActual = "usuario123"; // Reemplaza con el usuario actualmente autenticado
$esMiembro = esMiembro($usuarioActual);

if ($esMiembro) {
    $montoCompra = 1000; // Reemplaza con el monto de la compra realizada

    $puntosDescuento = obtenerPuntosDescuento($montoCompra);

    echo "¡Felicidades! Eres un miembro y tienes " . $puntosDescuento . " puntos de descuento para productos de flores.";
} else {
    echo "Lo siento, esta oferta solo está disponible para miembros.";
}
?>