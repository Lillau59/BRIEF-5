// Affichage de la map, avec les coordonnnées par défaut pour centrer la map
const defaultLatitude = 50.679057;
const defaultLongitude = 2.432957;
const defaultZoom = 10;
var map = L.map('map').setView([defaultLatitude, defaultLongitude], defaultZoom);
const couleurTrace = 'orange';
const couleurSurvol = '#e5b9d5';

// Le bouton qui permet de switcher entre la carte et la liste
const switcher = document.querySelector('.switcher');

// Les tableaux de tracés et de popups pour les étapes de l'itinéraires
let mapEtape = [];
let popup = [];

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
const strapiApi = "/api/etapes?populate=*";
const StrapiUrl = strapiIp + strapiPort + strapiApi;

//console.log(StrapiUrl);

fetch(StrapiUrl)
.then(function(response) {
  return response.json();
})
.then(function(response) {  

  // les données peuvent arriver dans un ordre différents de celui des id ascendant, on les trie donc d'abord pour les remettre dans l'ordre
  response.data.sort(function (a, b) {
    return a.id - b.id;
  });  

  construct(response.data);

}).catch(function(error) {
  console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
});

// On parcoure la liste des étapes
function construct(etapes) {

  for(const etape of etapes) {

    // On crée les éléments HTML de cette étape (nom, Kms...)
    // On veut obtenir cette structure
    //   <div class="etape">
    //     <a href="etape.html?etape=1">
    //       <div class="left-etape">
    //           <img src="img/thumbnails/etape1.jpg" alt="Calais - Ardres" class="img-etape">
    //           <div class="km">22,7 Km</div>
    //       </div>
    //       <div class="right-etape">
    //           <h3 class="type-etape">Voie verte / Stabilisé</h3>
    //           <h2 class="nom-etape">Calais > Ardres</h2>
    //           <p class="desc-etape">Cet itinéraire fait partie de l'EuroVelo 5 « Via RomeaFrancigena », une voie célèbre de pèlerinage puis de commerce reliant à partir du 9ème siècle Canterbury [...]</p>                    
    //       </div>
    //    </a>
    //  </div>

    // On crée la div 'etape'
    let eltEtape = document.createElement('div');
    eltEtape.classList.add('etape');
    eltEtape.classList.add('etape' + etape.id);    

    // On crée l'élément 'a' (qui mène à la page détail)
    let a = document.createElement('a');
    a.href = "etape.html?etape=" + etape.id;

    // On ajoute l'élément 'a' dans la div 'etape'
    eltEtape.appendChild(a);

    // On crée la div qui contient la miniature et le nombre de kilomètres
    let leftEtape = document.createElement('div');
    leftEtape.classList.add('left-etape');

    // On ajoute la div 'etape' dans l'élément 'a'
    a.appendChild(leftEtape);    

    // On crée l'élément img pour la miniature
    let img = document.createElement('img');      
    img.classList.add('img-etape');  
    img.alt = etape.attributes.nom;

    if(etape.attributes.photo.data != null) {
      img.src = strapiIp + strapiPort + etape.attributes.photo.data.attributes.formats.thumbnail.url
      //console.log(img.src);
    }
    else {
      img.src = "img/thumbnails/default.jpg";
    }

    // On ajoute l'image à la div leftEtape
    leftEtape.appendChild(img);

    // On crée la div qui contient le nombre de kilomètres
    let km = document.createElement('div');
    km.classList.add('km');
    km.innerText = etape.attributes.distance.toString().replace('.', ',') + " km";

    // On ajoute cette div à la div leftEtape
    leftEtape.appendChild(km);

    // On crée la div qui contient le nom de l'étape et le résumé
    let rigthEtape = document.createElement('div');
    rigthEtape.classList.add('right-etape');

    // On ajoute la div 'etape' dans l'élément 'a'
    a.appendChild(rigthEtape);      

    // On crée l'élément qui contient le type de voie et le revêtement
    let h3 = document.createElement('h3');
    h3.classList.add('type-etape');
    if(etape.attributes.revetement != null) {
      h3.innerText = etape.attributes.typevoie + " / " + etape.attributes.revetement;
    }
    else {
      h3.innerText = etape.attributes.typevoie;
    }

    let h2 = document.createElement('h2');
    h2.classList.add('nom-etape');
    h2.innerText = etape.attributes.nom;

    let desc = document.createElement('p');
    desc.classList.add('desc-etape');
    if(etape.attributes.resume.length > 150) {
      desc.innerText = etape.attributes.resume.substr(0, 150) + "[...]";
    }
    else {
      desc.innerText = etape.attributes.resume;
    }

    // On ajoute les éléments dans la div rigthEtape
    rigthEtape.appendChild(h3); 
    rigthEtape.appendChild(h2); 
    rigthEtape.appendChild(desc); 

    // On ajoute au document
    let container = document.querySelector('.etapes');
    container.appendChild(eltEtape);

    // On charge le fichier gpx de l'étape
    let url = './gpx/' + etape.attributes.gpx;

    // La popup qui s'affiche lorsqu'on survole le tracé de l'étape
    popup[etape.id] = L.popup(customOptions);

    //console.log(etape.attributes.nom.toString())

    // Quand on survole une étape sur la gauche, le tronçon correspondant est surligné
    document.querySelector('.etape' + etape.id).addEventListener('mouseover', () => {
      mapEtape[etape.id].setStyle({
        color: couleurSurvol
      });
    });
    document.querySelector('.etape' + etape.id).addEventListener('mouseout', () => {
      mapEtape[etape.id].setStyle({
        color: couleurTrace
      });
    });

    // Petit trick pour afficher un marker spécifique au début et à la fin de l'itinéraire complet et des m sur les étapes
    let iconStart = "pin-icon-start.png";
    let iconEnd = "circle.png";
    let iconShadow = "transparent.png";

    if(etape.id == 1) {
      iconStart = "pin-icon-start.png";
      iconEnd = "circle.png";
      iconShadow = "transparent.png";
    }
    else if (etape.id == 12) {
      iconStart = "circle.png";
      iconEnd = "pin-icon-end.png";
      iconShadow = "transparent.png";
    }
    else {
      iconStart = "circle.png";
      iconEnd = "circle.png";
      iconShadow = "transparent.png";
    }

    mapEtape[etape.id] = new L.GPX(url, {
      polyline_options: {
        color: couleurTrace,
        opacity: 0.85,
        weight: 5,
        lineCap: 'round'
      },
      marker_options: {
        startIconUrl: iconStart,
        endIconUrl: iconEnd,
        shadowUrl: iconShadow
      }
    }).on('mouseover', function (e) {
        this.setStyle({
          color: couleurSurvol
        });
        popup[etape.id]
          .setLatLng(e.latlng)
          .setContent("<h3>" + etape.attributes.nom + "</h3>")
          .openOn(map);
      }).on('mouseout', function (e) {
        map.closePopup();
        this.setStyle({
          color: couleurTrace
        });
      }).on('click', function (e) {
        document.location.href = "etape.html?etape=" + etape.id;
    }).addTo(map);
  }
}

switcher.addEventListener('click', () => { 
  if(switcher.innerText == "Afficher la carte") {
    document.querySelector('.etapes').style.display = 'none';  
    document.querySelector('#map').style.display = 'block';
    switcher.innerText = "Afficher la liste";
  }
  else {
    document.querySelector('.etapes').style.display = 'flex';  
    document.querySelector('#map').style.display = 'none';
    switcher.innerText = "Afficher la carte";
  }
});

window.addEventListener('resize', () => {
  // Si on repasse au dessus de 800 px, affichage liste + carte et suppression bouton
  if(window.innerWidth > 800) {
    document.querySelector('.etapes').style.display = 'flex';  
    document.querySelector('#map').style.display = 'block';
    switcher.display = "none";
  }
  else {
    if(switcher.innerText == "Afficher la carte") {
      document.querySelector('.etapes').style.display = 'flex';  
      document.querySelector('#map').style.display = 'none';
    }
    else {
      document.querySelector('.etapes').style.display = 'none';  
      document.querySelector('#map').style.display = 'block';
    }
  }
});


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

