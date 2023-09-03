<?php

    header('Content-Type: text/html; charset=utf-8');

    $data = json_decode(file_get_contents('cities.json'),true);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Request</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
        <table>
                <thead>
                    <th>S.NO</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    <?php
                        foreach($data as $key=>$value){
                    ?>
                    <tr>
                        <td>
                            <?php
                                $no = $key+1;
                                echo "$no";
                            ?>
                        </td>
                        <td>
                            <?php
                            echo "{$value['ct_name']}";
                            ?>
                        </td>
                    </tr>
                    <?php
                        }
                    ?>
                </tbody>
            </table>

</body>
</html>