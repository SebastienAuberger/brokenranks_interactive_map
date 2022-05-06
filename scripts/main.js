var map = new BRMap();
map.initMap();

var hideButton = document.getElementById('hide-button');
var filterMenu = document.getElementById('filter-menu');
var MapContainer = document.getElementById('map');

hideButton.addEventListener('click',() => {
    filterMenu.style.width = 0;
    MapContainer.style.width = '100%';
})