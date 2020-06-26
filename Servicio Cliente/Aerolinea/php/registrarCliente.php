<?php
    $client = new SoapClient("http://54.162.225.248:8080/hotel.wsdl");
    $nombre= $_POST['txtNombreCliente'];
    $apellido= $_POST['txtApellidosCliente'];
    $telefono = $_POST['txtTelefonoCliente'];
    $correo = $_POST['txtCorreoCliente'];
    $formaPago = $_POST['formaDePagoCliente'];
    $parametros = array("nombre"=>$nombre, "apellido"=>$apellido, "telefono"=>$telefono, "correo"=>$correo, "formaPago"=>$formaPago);
    $response = $client->__soapCall("RegistrarCliente", array($parametros));
    $respuesta = $response->{'respuesta'};
    echo $respuesta;
?>