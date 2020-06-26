<?php
    $client = new SoapClient("http://54.162.225.248:8080/hotel.wsdl");
    $fechaLlegada= $_POST['txtFechaLlegada'];
    $fechaSalida= $_POST['txtFeachaSalida'];
    $numPersonas = $_POST['txtNumeroPersonas'];
    $tipoHabitacion = $_POST['tipoHabitacion'];
    $idCliente = $_POST['txtIdCliente'];
    $idReservacion = $_POST['txtIdReservacion'];
    $parametros = array("idReservacion"=>$idReservacion ,"fechaLlegada"=>$fechaLlegada, "fechaSalida"=>$fechaSalida, "numPersonas"=>$numPersonas, "tipoHabitacion"=>$tipoHabitacion, "idCliente"=>$idCliente);
    $response = $client->__soapCall("HacerReservacion", array($parametros));
    $respuesta = $response->{'respuesta'};
    echo $respuesta;
?>