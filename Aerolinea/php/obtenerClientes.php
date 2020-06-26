<?php
    ini_set('soap.wsdl_cache_enabled',0);
    ini_set('soap.wsdl_cache_ttl',0);
    $client = new SoapClient("http://54.162.225.248:8080/hotel.wsdl");
    $parametros = array();
    $response = $client->__soapCall("ObtenerListaClientes", array());
    $respuesta = $response->{'cliente'};
    //print_r($response->{'estancia'});
    //$clientes [];
    $respuertafinal = '"Omar"';
    foreach($respuesta as $key=>$value){
        $respuertafinal =$respuertafinal.',{"id":"'.$value->{'idCliente'}.'","nombre":"'.$value->{'nombre'}.'", "apellido":"'.$value->{'apellido'}.'", "telefono":"'.$value->{'telefono'}.'", "correo":"'.$value->{'correo'}.'","formaPago":"'.$value->{'formaPago'}.'"}';
    }
    echo "[".$respuertafinal."]";
?>