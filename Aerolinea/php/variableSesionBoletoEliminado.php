<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $nombre = $_POST['nombre'];
    $_SESSION['nombreClienteBoleto'] = $nombre;
    $fecha = $_POST['fecha'];
    $_SESSION{'fechaBoleto'} = $fecha;
    echo $_SESSION['nombreClienteBoleto']." ".$_SESSION['fechaBoleto'];
?>