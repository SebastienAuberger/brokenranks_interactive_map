<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <title><?php echo isset($title) ? $title : "Undefined title" ?></title>
    <link rel="stylesheet" href="leaflet/leaflet.css"/>
    <link rel="stylesheet" href="css/style.css">
    <script src="leaflet/leaflet.js"></script>
    <script src="scripts/brmap.class.js"></script>
</head>
<body>
    <?php echo isset($content) ? $content : "Aucun contenu à afficher" ?>
</body>