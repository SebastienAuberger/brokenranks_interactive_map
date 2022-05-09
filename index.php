<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <title>Interactive map</title>
    <link rel="stylesheet" href="leaflet/leaflet.css"/>
    <link rel="stylesheet" href="css/style.css">
    <script src="leaflet/leaflet.js"></script>
    <script src="scripts/brmap.class.js"></script>
</head>
<body>
    <div class="main-container">
        <div id="filter-menu">
            <div id="hide-button">
                X 
            </div>
            <h1 id="title">
                Filtres
            </h1>
        </div>
        <div id="map">
    
        </div>
    </div>
    <div id="ContextMenu">
        <ul>
            <li>
                Ajouter un marqueur içi
            </li>
        </ul>
    </div>
    <script src="scripts/main.js"></script>
</body>