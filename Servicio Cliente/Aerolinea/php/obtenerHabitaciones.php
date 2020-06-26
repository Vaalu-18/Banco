<?php
    ini_set('soap.wsdl_cache_enabled',0);
    ini_set('soap.wsdl_cache_ttl',0);
    $client = new SoapClient("http://54.162.225.248:8080/hotel.wsdl");
    $parametros = array();
    $response = $client->__soapCall("ObtenerListaHabitaciones", array());
    $respuesta = $response->{'habitacion'};
    //print_r($response->{'estancia'});
    //$clientes [];
    $respuertafinal = '"Omar"';
    foreach($respuesta as $key=>$value){
        $respuertafinal =$respuertafinal.',{"numHabitacion":"'.$value->{'numHabitacion'}.'","piso":"'.$value->{'piso'}.'", "numCamas":"'.$value->{'numCamas'}.'", "cupoPersonas":"'.$value->{'cupoPersonas'}.'", "tipoHabitacion":"'.$value->{'tipoHabitacion'}.'","status":"'.$value->{'status'}.'"}';
    }
    echo "[".$respuertafinal."]";
    /*print "<br>";
    print '<table class="table"><thead class="thead-dark"><tr><th scope="col">Numero de habitación</th><th scope="col">Personas</th><th scope="col">Tipo de habitación</th><th scope="col">Check in</th><th scope="col">Check out</th><th scope="col">Status</th><th scope="col">Precio</th></tr></thead><tbody>';
    foreach($respuesta as $key=>$value ){
        print '<tr><th scope="row">'.$value->{'numHabitacion'}.'</th><td>'.$value->{'numPersonas'}.'</td><td>'.$value->{'tipoHabitacion'}.'</td><td>'.$value->{'fechaCheckIn'}.'</td><td>'.$value->{'fechaCheckOut'}.'</td><td>'.$value->{'status'}.'</td><td>'.$value->{'precio'}.'</td>';
    }
    print '</tbody></table>';*/
?>