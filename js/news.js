const api = "/api/article-image-backgrounds?populate=*";
const main = document.querySelector(".mainPN");

let url = strapiIp + strapiPort + api;

fetch(url)

  .then((response) => { return response.json(); })
  .then( data => {

    // les données peuvent arriver dans un ordre différent de celui des id ascendants, on les trie donc d'abord pour les remettre dans l'ordre
    data.data.sort(function (a, b) {
      return a.id - b.id;
    });  

      createHTML(data.data)
  })
  .catch( error => { console.log(error); })

  function createHTML(data){

    var section = document.querySelector('.grillepagenews');
    var counter = 1;

    for (const newsa of data)
    {

        let article = document.createElement("article");
        article.classList.add("casegrillePN" + counter);
        counter++;

        let a = document.createElement("a");
        a.href = "#"
        article.appendChild(a);

        let image = document.createElement("img");
        image.classList.add("imagearticlecasegrille");
        image.src = strapiIp + strapiPort + newsa.attributes.Image.data.attributes.url
        a.appendChild(image);


        let p = document.createElement("p");
        p.classList.add("titrearticlecasegrille");
        

        let span = document.createElement("span")
        span.innerText = newsa.attributes.Titre;

        p.appendChild(span);
        

        a.appendChild(p);
        section.appendChild(article);

    }
  }
