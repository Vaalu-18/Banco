<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $id = $_POST['idCliente'];
    $_SESSION['idCliente'] = $id;
    echo $_SESSION['idCliente'];
?>