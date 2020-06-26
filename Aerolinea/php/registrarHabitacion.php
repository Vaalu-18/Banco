<?php
    $client = new SoapClient("http://54.162.225.248:8080/hotel.wsdl");
    $numHabitacion= $_POST['txtNumeroHabitacion'];
    $piso= $_POST['txtNumeroPiso'];
    $numCamas = $_POST['txtNumeroCamas'];
    $numPersonas = $_POST['txtNumeroPersonas'];
    $tipoHabitacion = $_POST['tipoHabitacion'];
    $status = $_POST['statusHabitacion'];
    $parametros = array("numHabitacion"=>$numHabitacion, "piso"=>$piso, "numCamas"=>$numCamas, "cupoPersonas"=>$numPersonas, "tipoHabitacion"=>$tipoHabitacion, "status"=>$status);
    $response = $client->__soapCall("AgregarHabitacion", array($parametros));
    $respuesta = $response->{'respuesta'};
    echo $respuesta;
?>