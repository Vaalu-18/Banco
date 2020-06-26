<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $numReservacion = $_SESSION['numReservacion'];
    $client = new SoapClient("http://54.162.225.248:8080/hotel.wsdl");
    $parametros = array("idReservacion"=>$numReservacion);
    $response = $client->__soapCall("CancelarReservacion", array($parametros));
    session_destroy($_SESSION['numHabitacion']);
    echo $response->{'respuesta'};
?>