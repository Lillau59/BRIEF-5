// On récupère l'url de la page
let thisUrl = document.location.href; 

// On extrait le numéro d'étape
let id = thisUrl.split('=')[1];

// On récupère les infos de cette étape dans strapi
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
  var map = L.map('map');

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




