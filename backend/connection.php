<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Content-Lenght: 0');
header('Content-Type: text/plain');
$connect = mysqli_connect("localhost", "root", "", "people") or die("Database connection error");

?>


