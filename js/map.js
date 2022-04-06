// Affichage de la map, avec les coordonnnées par défaut pour centrer la map
const defaultLatitude = 50.679057;
const defaultLongitude = 2.432957;
const defaultZoom = 10;
var map = L.map('map').setView([defaultLatitude, defaultLongitude], defaultZoom);

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// permet de customiser la popup en lui ajoutant une classe ('popupCustom'), donc modifiable depuis le CSS
var customOptions =
{
  'className': 'popupCustom'
}

// On récupère la liste des étapes dans strapi
let strapiIp = "20.107.97.3";
let strapiPort = ":1337";
let strapiApi = "";

// On parcoure la liste des étapes

// On crée les éléments HTML de cette étape (nom, Kms...)

// On charge le fichier gpx de l'étape
var url = './gpx/EuroVelo_5_Via_Romea_Francigena.xml'; // URL to your GPX file or the GPX itself

// La popup qui s'affiche lorsqu'on survole le tracé de l'étape
var popup = L.popup(customOptions);

// On crée le tracé de l'étape à partir des données du fichier gpx
var itineraire = new L.GPX(url, {
  polyline_options: {
    color: 'orange',
    opacity: 0.85,
    weight: 5,
    lineCap: 'round'
  }
}).on('mouseover', function (e) {
  this.setStyle({
    color: 'yellow'
  });
  popup
    .setLatLng(e.latlng)
    .setContent("<a href='index.html'>EuroVelo 5 - Via Romea Francigena</a>")
    .openOn(map);
}).on('loaded', function (e) {
  var gpx = e.target;
  map.fitToBounds(gpx.getBounds());
}).addTo(map);

itineraire.on('mouseout', function (e) {
  map.closePopup();
  itineraire.setStyle({
    color: 'orange'
  });
});


// On trace les cercles de début et fin de l'itinéraire
var circleStart = L.circle([50.967177, 1.854066], {
  color: 'green',
  fillColor: '#fff',
  fillOpacity: 0.8,
  radius: 500
}).addTo(map);

var circleEnd = L.circle([50.691165, 3.254207], {
color: 'red',
fillColor: '#fff',
fillOpacity: 0.8,
radius: 500
}).addTo(map);


// ****************************************************************************************
//var marker = L.marker([50.4932069, 2.5494601]).addTo(map);

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

