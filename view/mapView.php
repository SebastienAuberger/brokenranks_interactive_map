<?php 
$title = "Interactive map";
ob_start();
?>

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
<?php
$content = ob_get_clean();
?>