<?php
    session_start(['cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400]);
    $id = $_POST['avion'];
    $_SESSION['avion'] = $id;
    echo $_SESSION['avion'];
?>