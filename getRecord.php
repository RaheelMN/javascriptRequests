<?php

header('Content-Type: application/json; charset=utf-8');

$data = json_decode(file_get_contents('cities.json'),true);
$id =0;
$cname='';
$record = [];


if(isset($_GET['cname'])){
$cname = $_GET['cname'];

}elseif(isset($_POST['cname'])){
    $cname = $_POST['cname'];

}

$record['cname']=$cname;

foreach($data as $key => $value){
    if($cname == $value['ct_name']){
        $id = $value['id'];
    }
}

$record['id']=$id;
echo json_encode($record,JSON_PRETTY_PRINT);

?>