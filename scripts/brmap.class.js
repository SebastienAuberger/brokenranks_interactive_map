class BRMap {

    constructor(){
        this.Markers = []
        this.map = L.map('map', {
            center: [0, 0],
            zoom: 5,
            zoomDelta: 1,
            maxZoom: 5,
            minZoom: 3,
            worldCopyJump: true,
            zoomControl: false
            });
            //var corner1 = L.latLng(91,-179);
            //var corner2 = L.latLng(-91,179);
            //var bounds = L.latLngBounds(corner2, corner1);
            //map.setMaxBounds(bounds);
            L.tileLayer('tiles/{z}/{x}/{y}.jpg',{
             noWrap: true
             }).addTo(this.map);
    }

   /* initMap(){
        var marker = L.marker([-92, 180]).addTo(map);
        var marker2 = L.marker([92, -180]).addTo(map);
        marker2.bindPopup("Top left map");
        marker.bindPopup("Bottom right map");
    }*/

    addMarker(posX,posY){
        if(!isNaN(posX) && !isNaN(posY)){
            this.Markers.push(L.marker([posX, posY]))
        }
    }

    addMarkerPopup(id,html){
        this.Markers[id].bindPopup(html);
    }

    displayMarkers(){
        this.Markers.forEach(element => {
            element.addTo(this.map);
        });
    }
}