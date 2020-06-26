<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $client = new SoapClient("http://54.90.84.87:8080/ws/aeropuerto.wsdl");
    $nombre = $_SESSION['nombrePasajero'];
    $destino = $_SESSION['destinoPasajero'];
    $coste = $_SESSION['costeColetoPasajero'];
    $sala = $_SESSION['salaPasajero'];
    $asiento = $_SESSION['asientoPasajero'];
    $fecha = $_SESSION['fechaBoletoCompra'];
    $avion = $_SESSION['avionViajePasajero'];
    $hora = $_SESSION['horaVueloAvion'];
    $parametros = array("nombre"=>$nombre, "destino"=>$destino, "coste"=>$coste, "sala"=>$sala, "asiento"=>$asiento, "fecha"=>$fecha, "avion"=>$avion, "hora"=>$hora);
    $response = $client->__soapCall("addPasajero", array($parametros));
    $respuesta = $response->{'datos'};
    echo $respuesta;
?>