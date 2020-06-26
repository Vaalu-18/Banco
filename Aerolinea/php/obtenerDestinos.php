<?php
    ini_set('soap.wsdl_cache_enabled',0);
    ini_set('soap.wsdl_cache_ttl',0);
    $client = new SoapClient("http://54.90.84.87:8080/ws/aeropuerto.wsdl");
    $parametros = array();
    $response = $client->__soapCall("findAllDestino", array());
    $respuesta = $response->{'vuelo'};
    //print_r($response->{'estancia'});
    //$clientes [];
    $respuertafinal = '"Omar"';
    foreach($respuesta as $key=>$value){
        $respuertafinal =$respuertafinal.',{"avion":"'.$value->{'avion'}.'","destino":"'.$value->{'destino'}.'", "costo":"'.$value->{'coste'}.'", "fechaSalida":"'.$value->{'fecha_salida'}.'", "horaSalida":"'.$value->{'hora_salida'}.'"}';
    }
    echo "[".$respuertafinal."]";
?>