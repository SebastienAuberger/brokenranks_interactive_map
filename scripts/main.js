var map = new BRMap();
map.initMap();

var hideButton = document.getElementById('hide-button');
var filterMenu = document.getElementById('filter-menu');
var MapContainer = document.getElementById('map');
var hideButtonSize = hideButton.offsetWidth
var toggleHideButton = true;
hideButton.addEventListener('click',() => {
    if(toggleHideButton)
    {
        filterMenu.style.width = 0;
        MapContainer.style.width = '100%';
        hideButton.style.left = '39px';
        hideButton.innerHTML = ">>";
        toggleHideButton = false;
    }
    else
    {
        filterMenu.style.width = '10%';
        MapContainer.style.width = '90%';
        hideButton.style.left = '0px';
        hideButton.innerHTML = "<<";
        toggleHideButton = true;
    }
})