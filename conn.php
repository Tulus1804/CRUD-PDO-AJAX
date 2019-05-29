<?php 

    // sintak untuk membuat koneksi database
    // dbname=db_inpos : untuk mendefinisikan nama databasenya
    // root : nama user
    // '' : password        secara default kosong
    $koneksi = new PDO('mysql:host=localhost;dbname=db_inpos', 'root', '');

?>