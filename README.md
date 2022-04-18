# BRIEF-5 - EuroVélo Hauts-De-France

## Contexte

Porté par la Fédération européenne des cyclistes (ECF), le projet EuroVelo comporte 17 itinéraires cyclables européens répartis sur tout le continent.
Nous réalisons le site de présentation de la portion Hauts-De-France de l’EuroVélo 5 (Qui part de Calais, jusqu’à Lille et la Belgique en passant par le marais Audomarois), nommée **Via Romea Francigena**.

## Plan du site

Le site est composé d'une page d'accueil, d'une page reprenant l’itinéraire complet de la **Via Romea Francigena**, d'autant de pages que d'étapes de l'itinéraire, d'une page concernant les news et une page de témoignages.

**Page d'accueil**

La page d'accueil se compose de de 6 sections :
- un plan général de l'Eurovélo 5,
- une section pratique, faite pour proposer des lieux d'hébergement, de restauration, et de réparation
- une partie témoignages
- une pour les avis
- et une section pour les voyages organisés.

## Nos points forts sur le projet

**Respect de la charte graphique**

Nous avons appliqué la charte graphique prescrites par Eurovélo. Nous avons utilisé lorsque cela était pertinent les couleurs prévues, et nous avons intégré la police de caractères spécifiée. Nous nous sommes pour le reste inspiré des sites des autres portions françaises.

**Utilisation d'un CMS**

Les pages Témoignages et News sont composés d'articles rédigeables et modifiables via Strapi, un CMS (Content Management System, Système de Gestion de Contenu), pour permettre la modification des données du site par une personne sans connaissance technique ;

**Base de données**

Création d'une base de données pour les pages témoignages, nouveautés et étapes du parcours Euro-vélo. Certains des champs de cette base de données sont de type texte enrichi, ce qui signifie qu'une personne ayant accès à STRAPI peut mettre en page les infos du site Web sans aucune connaissance technique.

**Responsive**

Le site est responsive. Il s'adapte en fonction de la zone d'affichage du périphérique (ordinateur, tablette, smartphone...). Un menu type "menu hamburger" a été développé et apparaît lorsque le site est affiché en mode smartphone.

**Carrousel**

Intégration d'un carrousel d'image à défilement automatique sur la page index.

**Cartes et tracés**

- Intégration d'une carte interactive dans la page itinéraire, et les pages d'étapes. Il est possible de zoomer dans les cartes ;
- Le menu de gauche offre un résumé de chaque étape avec, entre autres, une photo et la longueur de l'étape en km;
- Chargement des fichiers contenant les données GPS et affichage des trajets sur la carte dans la page itinéraire, et les pages d'étapes ;
- Affichage des points de départ et d'arrivée sur les trajets ;
- Affichage de la courbe d'élévations du trajet dans les pages des étapes, avec point le plus haut et point le plus bas ;
- Gestions des textes enrichis issus de la base Strapi pour afficher titres, textes en gras ou soulignés, listes... dans les pages du site ;
- Gestion des évènements sur la carte dans la page itinéraire : 
<ol>
<li>un survol d'une étape dans la partie liste des étapes (à gauche) met en surbrillance le tracé correspondant sur la carte ;</li>
<li>Au survol d'un segment de l'itinéraire, les villes de départ et d'arrivée de l'étape sont affichées en surimpression de la carte ;</li>
<li>Un clic sur un segment de l'itinéraire permet d'ouvrir la page de l'étape correspondante</li>
</ol>

*La version mobile prend tout son sens pour ces pages, facilement consultables en cours de voyage !*

## Gestion du projet

**Maquettage**

Nous avons utilisé Figma pour créer les maquettes du site

**Organisation**

Nous avons utilisé Trello pour l'organisation des tâches

**Versionnage**

Nous avons utilisé l'outil Git pour le versionnage des sources du site et la résolution des conflits.

**Feuilles de style**

Nous avons utilisé le préprocesseur SASS et le modèle 7-1 (7 dossiers thématiques) pour gérer la création des feuilles de style du site.


## Les technos que nous avons utilisés
<p>
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
</p>