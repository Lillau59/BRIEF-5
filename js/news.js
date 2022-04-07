const api = "/api/article-image-backgrounds?populate=*";
const main = document.querySelector(".mainPN");

let url = strapiIp + strapiPort + api;

fetch(url)

  .then((response) => { return response.json(); })
  .then( data => {    

      patapouf(data.data)
  })
  .catch( error => { console.log(error); })

  function patapouf(data){
    console.log(data);
    for (const newsa of data)
    {
        console.log(newsa.attributes.Titre);

        let article = document.createElement("article");
        article.classList.add("casegrillePN1");

        let section = document.createElement("section");
        section.classList.add("grillepagenews");
        main.appendChild(section);

        let a = document.createElement("a");
        section.appendChild(a);

        let image = document.createElement("img")
        image.classList.add("imagearticlecasegrille")

        let p = document.createElement("p");
        p.classList.add("titrearticlecasegrille");
        p.innerText = newsa.attributes.Titre
        

        article.appendChild(p)
        main.appendChild(article);
    }
  }