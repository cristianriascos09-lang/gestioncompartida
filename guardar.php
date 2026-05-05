<?php
include("conexion.php");

$autor = $_POST['autor'];
$descripcion = $_POST['descripcion'];

$sql = "INSERT INTO historia (autor, descripcion)
        VALUES ('$autor', '$descripcion')";

$conexion->query($sql);
?>