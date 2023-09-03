<?php


if(isset($_FILES) &&  isset($_POST['name'])){
    $img = $_FILES['fruit'];
    $name = $_POST['name'];
    $imagePath = "./images/{$img['name']}";
    move_uploaded_file($img['tmp_name'],$imagePath);
}else{
    header('location: http://localhost/javascriptrequests/index.html');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show Image</title>
</head>
<body>
    <h3>Image <?php
    echo $name;
    ?></h3>
    <div> 
        <img src="<?php echo $imagePath?> "  alt="image.jpg">
    </div>   
<?php

?>
</body>
</html>