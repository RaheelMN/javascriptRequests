<?php

header('Content-Type: application/json; charset=utf-8');
// $id = $_POST['id'];
$request = json_decode(file_get_contents("php://input"),true);
$data = json_decode(file_get_contents('cities.json'),true);
// echo "<br> id = $id";
// echo "<pre>";
// print_r($_POST);
// echo "</pre>";
echo "<pre>";
print_r($request);
echo "</pre>";
?>