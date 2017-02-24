<!-- ********************************************************************************************************* -->
<!-- Insertando Valores a la BD -->

<?php
require("generarxml.php");

  $lat = $_POST['lat'];
  $lng = $_POST['lon'];
  //echo $lat;
  
 /* $sql = "INSERT INTO clientes (lat,lng)
  VALUES ("12121","1212")";
*/
 $sql =INSERT INTO `softwas6_dbMapa`.`clientes` (`id`, `name`, `address`, `lat`, `lng`, `type`) VALUES (NULL, 'juan castillo', 'alallala', '121212', '21212', '1212');

  if ($conn->query($sql) === TRUE) {
      echo "Nuevo registro agregado correctamente";
  } else {
      echo "Error del capi: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();


?>