<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $avion = $_SESSION['avion'];
    $client = new SoapClient("http://54.90.84.87:8080/ws/aeropuerto.wsdl");
    $parametros = array("avion"=>$avion);
    $response = $client->__soapCall("delDestino", array($parametros));
    unset($_SESSION['avion']);
    echo $response->{'delete_destino'};
?>