
<?php
include("../model/bdd.class.php");
header("Content-type: application/json");
$bddManager = new BDD("root","","127.0.0.1");
$markers = $bddManager->getMarkers();
echo(json_encode($markers));