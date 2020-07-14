<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $tarjeta = $_POST['escuchaTarjetaRepite'];
    $fechaCad = $_POST['escuchaFechaCadRepite'];
    $cvv = $_POST['cvv'];
    $monto = $_POST['monto'];
    $monto = round($monto);
    $client = new SoapClient("http://3.83.142.54:8080/ws/banco.wsdl");
    $parametros = array("tarjeta"=>$tarjeta, "caducidad"=>$fechaCad, "cvv"=>$cvv, "monto"=>$monto);
    $response = $client->__soapCall("Cobrar", array($parametros));
    echo $response->{'respuesta'};
?>
