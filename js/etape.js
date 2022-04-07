// Affichage de la map, avec les coordonnnées récupérées dans strapi pour centrer la map
const latitude = 50.679057;
const longitude = 2.432957;
const zoom = 10;

// On récupère l'url de la page
let thisUrl = document.location.href; 

// On extrait le numéro d'étape
let id = thisUrl.split('=')[1];

// On récupère les infos de cette étape dans strapi
let strapiIp = "http://20.107.97.3";
let strapiPort = ":1337";
let strapiApi = "/api/etapes/" + id + "?populate=*";
let StrapiUrl = strapiIp + strapiPort + strapiApi;

fetch(StrapiUrl)
.then(function(response) {
  return response.json();
})
.then(function(response) {  
  construct(response.data);
}).catch(function(error) {
  console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
});

function construct(etape) {

  //console.log(etape.attributes);

    // On crée les éléments HTML de cette étape (nom, Kms...)
    // On veut obtenir cette structure  
    // <h2 class="nom-etape"><a href="itineraire.html"><i class="fa-solid fa-arrow-left"></i></a> Calais > Ardres</h2>
    // <h3 class="type-etape">Voie verte / Stabilisé</h3>
    // <div class="km">22,7 Km</div>
    // <img src="img/phototemoign6.jpg" alt="Calais - Ardres" class="img-etape">
    // <div class="resume">
    // </div>
    // <div class="situation">
    // </div>
    // <div class="parcours">
    // </div>
    // <div class="caracteristiques">
    // </div>
    // <div class="tourisme">
    // </div>
    // <div class="transport">
    // </div>

  var map = L.map('map').setView([latitude, longitude], zoom);
 

  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);


  // On charge le tracé 
  var url = './gpx/' + etape.attributes.gpx; // URL to your GPX file or the GPX itself

  // On crée le tracé de l'étape à partir des données du fichier gpx
  var itineraire = new L.GPX(url, {async: true, 
      polyline_options: {
        color: 'orange',
        opacity: 0.85,
        weight: 5,
        lineCap: 'round'
      }
    }).on('loaded', function (e) {

      map.fitBounds(e.target.getBounds());

    }).addTo(map);

}




