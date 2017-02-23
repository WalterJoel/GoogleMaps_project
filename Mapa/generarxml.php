
<?php
//Doducmento XML en PHP
require("dbinfo.php");


// Conexion a la BD
$conn = new mysqli($servername, $username, $password);

// Verificando la conexion
if ($conn->connect_error) {
    die("Conexion fallida: " . $conn->connect_error);
} 
	echo "Conexion exitosa";
?>
