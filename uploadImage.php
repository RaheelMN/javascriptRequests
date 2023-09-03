<?php
header('Content-Type:application/json;charset=utf-8');

if(isset($_FILES)){
    $img = $_FILES['image'];
    $imagePath = "./images/{$img['name']}";
    move_uploaded_file($img['tmp_name'],$imagePath);
    echo json_encode(['image'=>$imagePath],JSON_PRETTY_PRINT);
}else{
    header('location: http://localhost/javascriptrequests/index.html');
}

// echo "<pre>";
// print_r($_FILES);
// echo "</pre>";
?>