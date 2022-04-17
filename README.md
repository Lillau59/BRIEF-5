# BRIEF-5

Porté par la Fédération européenne des cyclistes (ECF), le projet EuroVelo comporte 17 itinéraires cyclables européens répartis sur tout le continent. 

Nous réalisons le site de présentation de la portion Hauts-De-France de l’EuroVélo 5 (Qui part de Calais, jusqu’à Lille et la Belgique en passant par le marais Audomarois).

Nous avons appliqué la charte graphique des sites des autres portions françaises.
Pour plus de praticité, le site a également été conçu pour être utilisé sur téléphone. 

La page d'accueil se compose de de 6 sections : 
-un plan général de l'Eurovélo 5,
-une section pratique, faite pour proposer des lieux d'hébergement, de restauration, et de réparation
-une partie témoignages
-une pour les avis 
-et une section pour les voyages organisés. 

Nous utilisons l'architecture SASS au modèle 7-1. 
Les pages Témoignages et News sont composés d'articles rédigeables et modifiables via strapi que nous déployons avec Fetch. 

La page d'itinéraire se compose d'un plan général dans lequel on peu sélectionner les étapes. Elles sont cliquables et conduisent à une page spécifique sur l'étape, celles-ci peuvent d'ailleurs être ajoutées en favorit. Le plan est zoomable. 

Le menu de gauche offre un résumé de chaque étape avec une photo et la longueur de l'étape en km.
La version mobile prend tout son sens pour ces pages, facilement consultables en cours de voyage. 