<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $usuario= $_POST['mail'];
    $contra= $_POST['password'];
    $_SESSION['usuario']=$usuario;
    echo $_SESSION['usuario'];
?>