<?php
    $client = new SoapClient("http://54.90.84.87:8080/ws/aeropuerto.wsdl");
    $avion= $_POST['txtNombreAvion'];
    $destino= $_POST['txtNombreDestino'];
    $fechaVuelo = $_POST['txtFechaVuelo'];
    $horaVuelo = $_POST['txtHoraVuelo'];
    $costo = $_POST['txtCosto'];
    $parametros = array("avion"=>$avion, "destino"=>$destino, "fecha_vuelo"=>$fechaVuelo, "costo"=>$costo, "hora_salida"=>$horaVuelo);
    $response = $client->__soapCall("addDestino", array($parametros));
    $respuesta = $response->{'save_destino'};
    echo $respuesta;
?>