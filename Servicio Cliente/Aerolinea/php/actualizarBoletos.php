<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $client = new SoapClient("http://54.90.84.87:8080/ws/aeropuerto.wsdl");
    $nombre = $_POST['txtNombrePasajeroBoleto1'];
    $destino = $_POST['txtNombreDestinoBoleto1'];
    $coste = $_POST['txtCostoBoleto1'];
    $sala = $_POST['tipoSala1'];
    $asiento = $_POST['txtAsientoBoleto1'];
    $fecha = $_POST['txtFechaVueloBoleto1'];
    $avion = $_POST['txtNombreAvionBoleto1'];
    $hora = $_POST['txtHoraVueloBoleto1'];
    $parametros = array("nombre"=>$nombre, "destino"=>$destino, "costo"=>$coste, "sala"=>$sala, "asiento"=>$asiento, "fecha"=>$fecha, "avion"=>$avion, "hora"=>$hora);
    $response = $client->__soapCall("updPasajero", array($parametros));
    $respuesta = $response->{'datos'};
    echo $respuesta;
?>