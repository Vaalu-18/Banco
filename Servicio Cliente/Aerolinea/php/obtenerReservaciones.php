<?php
    $client = new SoapClient("http://54.162.225.248:8080/hotel.wsdl");
    $parametros = array();
    $response = $client->__soapCall("ObtenerListaReservaciones", array());
    $respuesta = $response->{'reservacion'};
    $respuertafinal = '"Omar"';
    foreach($respuesta as $key=>$value){
        $respuertafinal =$respuertafinal.',{"numPersonas":"'.$value->{'numPersonas'}.'","tipoHabitacion":"'.$value->{'tipoHabitacion'}.'", "fechaLlegada":"'.$value->{'fechaLlegada'}.'", "fechaSalida":"'.$value->{'fechaSalida'}.'", "precio":"'.$value->{'precio'}.'","idCliente":"'.$value->{'idCliente'}.'","idReservacion":"'.$value->{'idReservacion'}.'","status":"'.$value->{'status'}.'"}';
    }
    echo "[".$respuertafinal."]";
?>