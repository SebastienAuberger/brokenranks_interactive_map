<?php

function mapView(){
    include("model/bdd.class.php");

    $bddManager = new BDD("root","","127.0.0.1");

    include("view/mapView.php");
    include("view/baseView.php");
}