var map = L.map('map').setView([50.679057, 2.432957], 10);

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var url = './js/EuroVelo_5_Via_Romea_Francigena.xml'; // URL to your GPX file or the GPX itself

var customOptions =
{
'className' : 'popupCustom'
}

var popup = L.popup(customOptions);

  var itineraire = new L.GPX(url, {
    polyline_options: {
      color: 'orange',
      opacity: 0.85,
      weight: 5,
      lineCap: 'round'
    }
  }).on('mouseover', function(e) {
    this.setStyle({
      color: 'red'
    });
    popup
    .setLatLng(e.latlng)
    .setContent("<a href='index.html'>EuroVelo 5 - Via Romea Francigena</a>")
    .openOn(map);

  }).on('loaded', function(e) {
    var gpx = e.target;
    map.fitToBounds(gpx.getBounds());
  }).addTo(map);

itineraire.on('mouseout', function(e) {
  map.closePopup();
  itineraire.setStyle({
    color: 'orange'
  });
});

 //var marker = L.marker([50.4932069, 2.5494601]).addTo(map);

// var circle = L.circle([50.8250846, 2.1768488], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 2000
// }).addTo(map);

// var polygon = L.polygon([
//     [50.4553814, 2.5503794],
//     [50.4001606, 2.7407798],
//     [50.4250847, 2.8214096]
// ]).addTo(map);

// marker.bindPopup("<a href='index.html'>EuroVelo 5 - Via Romea Francigena</a>",customOptions).openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);

