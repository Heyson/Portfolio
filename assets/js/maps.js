
    let map;

function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 41.084045, lng: -73.874245 },
            zoom: 8,
        });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
      {lat : 40.785091, lng: -73.968285},
      {lat : 41.084045, lng: -73.874245},
      {lat : 40.754932, lng: -73.984016}
  ];

  var markers = locations.map(function(location, i){
      return new google.maps.Marker({
        position: location,
          label: labels[i % labels.length]
      });
  });

  var markerclusterer = new MarkerClusterer(map, markers,
     {
        imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

}
