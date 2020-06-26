<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $idCliente = $_SESSION['idCliente'];
    $client = new SoapClient("http://54.162.225.248:8080/hotel.wsdl");
    $parametros = array("idCliente"=>$idCliente);
    $response = $client->__soapCall("EliminarCliente", array($parametros));
    session_unset($_SESSION['idCliente']);
    echo $response->{'respuesta'};
?>