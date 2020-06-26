<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $pasajero = $_POST['txtNombrePasajeroBoleto'];
    $fechaBoleto = $_POST['txtFechaVueloBoleto'];
    $client = new SoapClient("http://54.90.84.87:8080/ws/aeropuerto.wsdl");
    $parametros = array("nombre"=>$pasajero, "fecha"=>$fechaBoleto);
    $response = $client->__soapCall("showPasajero", array($parametros));
    $pasajeroEncontrado = $response->{'nombre'};
    $destinoEncontrado = $response->{'destino'};
    $costoBoleto = $response->{'costo'};
    $salaBoleto = $response->{'sala'};
    $asientoBoleto = $response->{'asiento'};
    $fechaBoleto = $response->{'fecha'};
    $avionBoleto = $response->{'avion'};
    $horaBoleto = $response->{'hora'};
    $respuertafinal = '"Omar"';
    $respuertafinal =$respuertafinal.',{"nombre":"'.$pasajeroEncontrado.'","destino":"'.$destinoEncontrado.'", "costo":"'.$costoBoleto.'", "sala":"'.$salaBoleto.'", "asiento":"'.$asientoBoleto.'","fecha":"'.$fechaBoleto.'","avion":"'.$avionBoleto.'","hora":"'.$horaBoleto.'"}';
    echo "[".$respuertafinal."]";
?>