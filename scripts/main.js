var map = new BRMap();
//map.initMap();

var hideButton = document.getElementById('hide-button');
var filterMenu = document.getElementById('filter-menu');
var MapContainer = document.getElementById('map');
//var ContextMenu = document.getElementById('ContextMenu');
var toggleHideButton = true;
//var mouseX = 0;
//var mouseY = 0;
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
        hideButton.innerHTML = " X";
        toggleHideButton = true;
    }
})

map.getAllMarkers();
//map.addMarker(25,0);
//map.addMarker(20,0);
//map.addMarker(15,0);
map.displayMarkers()
/* INTERACTIVE MENU TO ADD MARKER (IMPLEMENTATION LATER)

MapContainer.addEventListener('mousemove', (event) =>{
    mouseX = event.clientX;
    mouseY = event.clientY;
    console.log('POS: X = ' + mouseX + ' Y = ' + mouseY);
})

MapContainer.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    ContextMenu.style.left = mouseX + 'px';
    ContextMenu.style.top = mouseY + 'px';
    ContextMenu.style.visibility = 'visible';
})
*/