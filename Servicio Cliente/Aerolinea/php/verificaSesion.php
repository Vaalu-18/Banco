<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    if(isset($_SESSION['usuario'])){
        $sesion= $_SESSION['usuario'];
    }else{
        $sesion= "0";
    }
    echo $sesion
?>