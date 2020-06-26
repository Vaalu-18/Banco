<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $client = new SoapClient("http://54.162.225.248:8080/hotel.wsdl");
    $numHabitacion= $_POST['txtNumeroHabitacion'];
    $piso= $_POST['txtNumeroPiso'];
    $numCamas = $_POST['txtNumeroCamas'];
    $numPersonas = $_POST['txtNumeroPersonas'];
    $tipoHabitacion = $_POST['tipoHabitacion'];
    $status = $_POST['statusHabitacion'];
    $parametros = array("numHabitacion"=>$numHabitacion, "piso"=>$piso, "numCamas"=>$numCamas, "cupoPersonas"=>$numPersonas, "tipoHabitacion"=>$tipoHabitacion, "status"=>$status);
    $response = $client->__soapCall("EditarHabitacion", array($parametros));
    $respuesta = $response->{'respuesta'};
    echo $respuesta;
?>