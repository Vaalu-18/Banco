<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $nombreBoleto = $_SESSION['nombreClienteBoleto'];
    $fechaBoleto = $_SESSION['fechaBoleto'];
    $client = new SoapClient("http://54.90.84.87:8080/ws/aeropuerto.wsdl");
    $parametros = array("nombre"=>$nombreBoleto, "fecha"=>$fechaBoleto);
    $response = $client->__soapCall("delPasajero", array($parametros));
    unset($_SESSION['nombreClienteBoleto']);
    unset($_SESSION['fechaBoleto']);
    echo $response->{'datos'};
?>