<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $client = new SoapClient("http://54.162.225.248:8080/hotel.wsdl");
    $nombre= $_POST['txtNombreCliente'];
    $apellido= $_POST['txtApellidosCliente'];
    $telefono = $_POST['txtTelefonoCliente'];
    $correo = $_POST['txtCorreoCliente'];
    $formaPago = $_POST['formaDePagoCliente'];
    $id= $_SESSION['idCliente'];
    $parametros = array("idCliente"=>$id,"nombre"=>$nombre, "apellido"=>$apellido, "telefono"=>$telefono, "correo"=>$correo, "formaPago"=>$formaPago);
    $response = $client->__soapCall("EditarCliente", array($parametros));
    $respuesta = $response->{'respuesta'};
    //session_unset($_SESSION['idCliente']);
    echo $respuesta;
?>