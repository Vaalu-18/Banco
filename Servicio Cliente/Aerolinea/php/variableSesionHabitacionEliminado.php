<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $numero = $_POST['numHabitacion'];
    $_SESSION['numHabitacion'] = $numero;
    echo $_SESSION['numHabitacion'];
?>