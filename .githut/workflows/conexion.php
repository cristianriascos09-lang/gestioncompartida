<?php
$conexion = new mysqli(" mysql-cristian1995.alwaysdata.net", "cristian1995", "", "clase123");

if ($conexion->connect_error) {
    die("Error de conexión");
}
?>