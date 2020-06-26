<?php
    $client = new SoapClient("http://54.162.225.248:8080/hotel.wsdl");
    $parametros = array();
    $response = $client->__soapCall("ObtenerListaEstancias", array());
    $respuesta = $response->{'estancia'};
    $respuertafinal = '"Omar"';
    foreach($respuesta as $key=>$value){
        $respuertafinal =$respuertafinal.',{"numHabitacion":"'.$value->{'numHabitacion'}.'","numPersonas":"'.$value->{'numPersonas'}.'", "tipoHabitacion":"'.$value->{'tipoHabitacion'}.'", "fechaCheckIn":"'.$value->{'fechaCheckIn'}.'", "fechaCheckOut":"'.$value->{'fechaCheckOut'}.'","status":"'.$value->{'status'}.'", "precio":"'.$value->{'precio'}.'","idCliente":"'.$value->{'idCliente'}.'","idEstancia":"'.$value->{'idEstancia'}.'"}';
    }
    echo "[".$respuertafinal."]";
?>