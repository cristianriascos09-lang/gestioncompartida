<?php
$conexion = new mysqli("localhost", "root", "", "calculo");

if ($conexion->connect_error) {
    die("Error de conexión");
}
?>