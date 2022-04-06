// On récupère l'url de la page

// On extrait le numéro d'étape

// On récupère les infos de cette étape dans strapi
let strapiIp = "20.107.97.3";
let strapiPort = ":1337";
let strapiApi = "";

// Affichage de la map, avec les coordonnnées récupérées dans strapi pour centrer la map
const latitude = 50.679057;
const longitude = 2.432957;
const zoom = 10;
var map = L.map('map').setView([latitude, longitude], zoom);

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// On charge le tracé 
var url = './gpx/EuroVelo_5_Via_Romea_Francigena.xml'; // URL to your GPX file or the GPX itself

// On crée le tracé de l'étape à partir des données du fichier gpx
var itineraire = new L.GPX(url, {
    polyline_options: {
      color: 'orange',
      opacity: 0.85,
      weight: 5,
      lineCap: 'round'
    }
  }).on('loaded', function (e) {
    var gpx = e.target;
    map.fitToBounds(gpx.getBounds());
  }).addTo(map);