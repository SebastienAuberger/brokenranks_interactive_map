<?php
include_once('controller/mainController.php');
if(isset($_GET['page']) && $_GET['page'] != ""){
    switch($_GET['page']){
        case 'map':
            mapView();
            break;
        case 'admin':
            admin();
            break;
        default:
            mapView();
            break;
    }
}
else{
    mapView();
}