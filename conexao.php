<?php
    // ACESSO AO BANCO DE DADOS

    define('HOST', 'localhost');
    define('USER', 'root');
    define ('PASS', '');
    define('DBNAME', 'projeto-cadastro-cliente');



    $conn = new PDO('mysql:host='.HOST.';dbname='.DBNAME.';',USER,PASS);


?>