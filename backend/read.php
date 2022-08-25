<?php

// Llamando al archivo donde está la conexión a la base de datos
include "connection.php";

    // Declarar el arreglo donde se almacenará la información a recibir
    $info = array();

    // Sentencia SQL
    $query = mysqli_query($connect, "SELECT * FROM `person`");

    // Leer cada registro
    while($row = mysqli_fetch_object($query)) 
    {
        // Ubicar dentro del arreglo la información recibida
        $info[] = $row;
    }
    echo json_encode($info);
    // Si el error está fuera de los casos anteriores
    echo mysqli_error($connect);
?>
