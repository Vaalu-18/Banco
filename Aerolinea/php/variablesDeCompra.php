<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $nombre = $_POST['txtNombrePasajero'];
    $_SESSION['nombrePasajero'] = $nombre;
    $destino = $_POST['txtNombreDestino'];
    $_SESSION['destinoPasajero'] = $destino;
    $coste = $_POST['txtCosto'];
    $_SESSION['costeColetoPasajero'] = $coste;
    $sala = $_POST['tipoSala'];
    $_SESSION['salaPasajero'] = $sala;
    $asiento = $_POST['txtAsiento'];
    $_SESSION['asientoPasajero'] = $asiento;
    $fecha = $_POST['txtFechaVuelo'];
    $_SESSION['fechaBoletoCompra'] = $fecha;
    $avion = $_POST['txtNombreAvion'];
    $_SESSION['avionViajePasajero'] = $avion;
    $hora = $_POST['txtHoraVuelo'];
    $_SESSION['horaVueloAvion'] = $hora;
    echo "1";
?>