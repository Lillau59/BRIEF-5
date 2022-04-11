// On récupère l'url de la page
let thisUrl = document.location.href; 

// Le bouton qui permet de switcher entre la carte et la liste
let switcher = document.querySelector('.switcher');

// On extrait le numéro d'étape
let id = thisUrl.split('=')[1];

// On récupère les infos de cette étape dans strapi
const strapiApi = "/api/etapes/" + id + "?populate=*";
const StrapiUrl = strapiIp + strapiPort + strapiApi;

var itineraire;
var map;
var bounds;

const defaultLatitude = 50.679057;
const defaultLongitude = 2.432957;
const defaultZoom = 10;

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

    // On crée les éléments HTML 
    // On veut obtenir cette structure  
    // <h2 class="nom-etape"><a href="itineraire.html"><i class="fa-solid fa-arrow-left"></i></a> Calais > Ardres</h2>
    // <h3 class="type-etape">Voie verte / Stabilisé</h3>
    // <div class="km">22,7 Km</div>
    // <img src="img/phototemoign6.jpg" alt="Calais - Ardres" class="img-etape">
    // <h2>Présentation</h2>
    // <div class="resume"></div>
    // <div class="situation"></div>
    // <div class="parcours"></div>
    // <div class="caracteristiques"></div>
    // <div class="tourisme"></div>
    // <div class="transport"></div>

  document.querySelector('.nom').innerText = ' ' + etape.attributes.nom;
  document.title = etape.attributes.nom;

  if(etape.attributes.revetement != null) {
    document.querySelector('.type-etape').innerText = etape.attributes.typevoie + " / " + etape.attributes.revetement;
  }
  else {
    document.querySelector('.type-etape').innerText = etape.attributes.typevoie;
  }

  document.querySelector('.km').innerText = etape.attributes.distance.toString().replace('.', ',') + " km";

  if(etape.attributes.photo.data != null)
    document.querySelector('.img-etape').src = strapiIp + strapiPort + etape.attributes.photo.data.attributes.url
  else 
    document.querySelector('.img-etape').src = "img/default.jpg";

  document.querySelector('.img-etape').alt = etape.attributes.nom;

  // gestion des champs Rich text issus de strapi
  if(etape.attributes.resume != null)
    document.querySelector('.resume').innerHTML = marked.parse(etape.attributes.resume);
  if(etape.attributes.situation != null)
    document.querySelector('.situation').innerHTML = marked.parse(etape.attributes.situation);
  if(etape.attributes.parcours != null)
    document.querySelector('.parcours').innerHTML = marked.parse(etape.attributes.parcours);
  if(etape.attributes.caracteristiques != null)
    document.querySelector('.caracteristiques').innerHTML = marked.parse(etape.attributes.caracteristiques);
  if(etape.attributes.tourisme != null)    
    document.querySelector('.tourisme').innerHTML = marked.parse(etape.attributes.tourisme);
  if(etape.attributes.transport != null)    
    document.querySelector('.transport').innerHTML = marked.parse(etape.attributes.transport);

  if(id == 1) {    
    document.querySelector('.precedent').style.visibility = "hidden";
  }
  else {
    document.querySelector('.precedent a').href = "etape.html?etape=" + (parseInt(id) - 1);
  }
 
  if(id == 12) {
    document.querySelector('.suivant').style.visibility = "hidden";    
  }
  else {
    document.querySelector('.suivant a').href = "etape.html?etape=" + (parseInt(id) + 1);
  }

  document.querySelector('.id-etape').innerText = id;  

  // Gestion de la carte
  map = L.map('map');

  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // On charge le tracé 
  var url = './gpx/' + etape.attributes.gpx; // URL to your GPX file or the GPX itself

  // On crée le tracé de l'étape à partir des données du fichier gpx
  itineraire = new L.GPX(url, {async: true, 
      polyline_options: {
        color: 'orange',
        opacity: 0.85,
        weight: 5,
        lineCap: 'round'
      },
      marker_options: {
        startIconUrl: 'pin-icon-start.png',
        endIconUrl: 'pin-icon-end.png',
        shadowUrl: 'pin-shadow.png'
      }
    }).on('loaded', function (e) {
      map.fitBounds(e.target.getBounds());
      bounds = e.target.getBounds();
    }).addTo(map);
}

// window.addEventListener('resize', () => {  
//   if(window.innerWidth > 800) {
//     document.querySelector('.description').style.display = 'none'; 
//     document.querySelector('#map').style.display = 'block';

//   }
// });

switcher.addEventListener('click', () => { 
  if(switcher.innerText == "Afficher la carte") {
    document.querySelector('.description').style.display = 'none';  
    document.querySelector('#map').style.display = 'block';
    switcher.innerText = "Afficher la liste";
    // Bidouille pour pouvoir afficher la carte correctement
    window.dispatchEvent(new Event('resize'));
    map.setZoom(12); 
  }
  else {
    document.querySelector('.description').style.display = 'flex';  
    document.querySelector('#map').style.display = 'none';

    switcher.innerText = "Afficher la carte";
  }
});

window.addEventListener('resize', () => {
  // Si on repasse au dessus de 1000 px, affichage liste + carte et suppression bouton
  if(window.innerWidth > 1000) {
    document.querySelector('.description').style.display = 'flex';  
    document.querySelector('#map').style.display = 'block';
    map.fitBounds(itineraire.getBounds());
    //window.dispatchEvent(new Event('resize'));
    map.setZoom(12);     
    switcher.display = "none";
  }
  else {
    switcher.display = "block";
    if(switcher.innerText == "Afficher la carte") {
      document.querySelector('.description').style.display = 'flex';  
      document.querySelector('#map').style.display = 'none';
    }
    else {
      document.querySelector('.description').style.display = 'none';  
      document.querySelector('#map').style.display = 'block';
    }
  }
});

