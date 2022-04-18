# BRIEF-5 - EuroVélo Hauts-De-France
  

## Contexte

Porté par la Fédération européenne des cyclistes (ECF), le projet EuroVelo comporte 17 itinéraires cyclables européens répartis sur tout le continent.
Nous réalisons le site de présentation de la portion Hauts-De-France de l’EuroVélo 5 (Qui part de Calais, jusqu’à Lille et la Belgique en passant par le marais Audomarois).

  

Nous avons appliqué la charte graphique des sites des autres portions françaises.

Pour plus de praticité, le site a également été conçu pour être utilisé sur smartphone.

  

La page d'accueil se compose de de 6 sections :

- un plan général de l'Eurovélo 5,
- une section pratique, faite pour proposer des lieux d'hébergement, de restauration, et de réparation
- une partie témoignages
- une pour les avis
- et une section pour les voyages organisés.

  



Les pages Témoignages et News sont composés d'articles rédigeables et modifiables via Strapi, un CMS (Content Management System, Système de Gestion de Contenu), pour permettre la modification des données du site par une personne sans connaissance technique ;
Création d'une base de données pour les pages témoignages, nouveautés et étapes du parcours Euro-vélo. Certains des champs de cette basse de données sont de type texte enrichi, ce qui signifie qu'une personne ayant accès à STRAPI peuvent mettre en page les ifos du site Web sans aucune connaissance technique ;
Intégration d'un carousel d'image à défilement automatique sur la page index ;
Le site est responsive. Ajout d'une menu type "menu hamburger", lorsque le site est affiché en mode smartphone ;

## Cartes et tracés

- Intégration d'une carte interactive dans la page itinéraire, et les pages d'étapes. Il est possible de zoomer dans les cartes ;
- Le menu de gauche offre un résumé de chaque étape avec, entre autres, une photo et la longueur de l'étape en km;
- Chargement des fichiers contenant les données GPS et affichage des trajets sur la carte dans la page itinéraire, et les pages d'étapes ;
- Affichage des points de départ et d'arrivée sur les trajets ;
- Gestion des évènements sur la carte dans la page itinéraire : un survol d'une étape dans la partie liste des étapes (à gauche) met en surbrillance le tracé correspondant sur la carte. Au survol d'un segment de l'itinéraire, les villes de départ et d'arrivée de l'étape sont affichées en surimpression de la carte.Un clic sur un segment de l'itinéraire permet d'ouvrir la page de l'étape correspondante ;
Affichage de la courbe d'élévations du trajet dans les pages des étapes, avec point le plus haut et point le plus bas ;
- Gestions des textes enrichis issus de la base Strapi pour afficher titres, textes en gras ou soulignés, listes... dans les pages du site ;

*La version mobile prend tout son sens pour ces pages, facilement consultables en cours de voyage !*

## Les technos que nous avons utilisés

<img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML5" title="HTML5" />
<img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS3" title="CSS3" />
<img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
<img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SASS" title="SASS" />
<img width="70" src="https://www.cmswire.com/-/media/6f319f84dc3d4db69457aeda6ffc092f.ashx" alt="Strapi" title="Strapi" />
<img width="110" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Leaflet_logo.svg/320px-Leaflet_logo.svg.png" alt="Leaflet" title="Leaflet" />
<img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="vscode" title="vscode" />
<img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="GitHub" title="GitHub" />
<img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" title="Figma" />
<img width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg" alt="Visual Studio Code" title="Visual Studio Code" />

