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

    addMarker(posX,posY){
        if(!isNaN(posX) && !isNaN(posY)){
            this.Markers.push(L.marker([posX, posY]))
        }
    }

    addMarkerPopup(id,html){
        this.Markers[id].bindPopup(html);
    }

    getAllMarkers(){
        var req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if(req.readyState === XMLHttpRequest.DONE){
                if(req.status === 200){
                    let jsRes = JSON.parse(req.responseText);
                    console.log(jsRes)
                    jsRes.forEach(element => {
                        console.log(element.posX);
                        if(element.popup == "1"){
                            this.Markers.push(L.marker([element.posX, element.posY]).bindPopup(element.html))
                        }
                        else{
                            this.Markers.push(L.marker([element.posX, element.posY]))
                        }
                    });
                    this.displayMarkers()
                }
            }
        }
        req.open("get","model/getMarkers.php");
        req.send();
    }

    displayMarkers(){
        this.Markers.forEach(element => {
            element.addTo(this.map);
        });
    }
}