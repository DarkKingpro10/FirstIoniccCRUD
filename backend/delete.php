<?php

// Llamando al archivo donde está la conexión a la base de datos
include "connection.php";

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

//Asignando valores a las variables
$person_id = $_GET['person_id'];

    // Sentencia SQL con sus valores enviados
    $query = mysqli_query($connect, "DELETE FROM `person` WHERE `person_id`= '{$person_id}'");

    // Evaluar el resultado de la sentencia SQL
    if($query) {
        // Si fue exitosa el mensaje lo confirmará
        http_response_code(201);
        $message['status'] = "Success";
    } else {
        // Si hubo un error en la sentencia el mensaje lo confirmará
        http_response_code(422);
        $message['status'] = "Error";
    }
    // Se imprime el mensaje obtenido
    echo json_encode($message);

    // Si el error está fuera de los casos anteriores
    echo mysqli_error($connect);

?>