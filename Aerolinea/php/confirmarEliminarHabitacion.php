<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $numHabitacion = $_SESSION['numHabitacion'];
    $client = new SoapClient("http://54.162.225.248:8080/hotel.wsdl");
    $parametros = array("numHabitacion"=>$numHabitacion);
    $response = $client->__soapCall("EliminarHabitacion", array($parametros));
    session_destroy($_SESSION['numHabitacion']);
    echo $response->{'respuesta'};
?>