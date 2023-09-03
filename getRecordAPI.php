<?php

header('Content-Type: application/json; charset=utf-8');

$data = json_decode(file_get_contents('cities.json'),true);

$request = json_decode(file_get_contents('php://input'),true);
$cname=$request['cname'];
$record = [];

$record['cname']=$cname;

foreach($data as $key => $value){
    if($cname == $value['ct_name']){
        $record['id'] = $value['id'];
    }
}

echo json_encode($record,JSON_PRETTY_PRINT);

?>