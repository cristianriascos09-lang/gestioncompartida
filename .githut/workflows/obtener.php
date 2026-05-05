<?php
include("conexion.php");

$resultado = $conexion->query("SELECT * FROM historia");

$datos = [];

while ($fila = $resultado->fetch_assoc()) {
    $datos[] = $fila;
}

echo json_encode($datos);
?>