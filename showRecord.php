<?php
    header('Content-Type: text/html; charset=utf-8');
    $data = json_decode(file_get_contents('cities.json'),true);

    if(isset($_GET['id'])){
        $id = $_GET['id'];
    }

    if(isset($_POST['id'])){
        $id = $_POST['id'];
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>City Record</h3>
    <div>
        City id: <?php
        echo " $id"
        ?>
    </div>
    <div>
        City Name: <?php
        $city = "";
        foreach($data as $key => $value){
            if($id == $value['id']){
                $city = $value['ct_name'];
            }
        }
        echo " $city";
        ?>
    </div>    
<?php

?>
</body>
</html>