<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $numero = $_POST['numReservacion'];
    $_SESSION['numReservacion'] = $numero;
    echo $_SESSION['numReservacion'];
?>