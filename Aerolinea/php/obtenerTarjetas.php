<?php
    $client = curl_init();
    curl_setopt($client, CURLOPT_URL, "http://localhost:8080/api/var2/banco/pagos/version4");
    curl_setopt($client, CURLOPT_RETURNTRANSFER, true);
    $res = curl_exec($client);
    curl_close($client);
    //print_r($res);
    /*$data = json_decode( file_get_contents('http://localhost:8080/api/var2/banco/pagos/version4'), true );
    echo $data;*/
    echo $res;
?>