const url = strapiIp + strapiPort;
const apiTemoignage = "/api/temoignages";
const img = "?populate=*";

function printTemoignages(data){

 let main = document.querySelector("main");

 let nombreArticle = 1 ;

 for (let article of data.data){
     console.log(article);

    let eltArticle = document.createElement("article");
    main.appendChild(eltArticle);

    eltArticle.classList.add("article" + nombreArticle);
    nombreArticle = nombreArticle + 1

    let a = document.createElement("a");
    a.classList.add("phototemoign");
    a.href = "#"
    eltArticle.appendChild(a);

    let img = document.createElement("img");
    img.alt = article.attributes.titre;
    img.src = url + article.attributes.image.data.attributes.formats.medium.url;
    console.log(article.attributes.image.data.attributes.url);
    a.appendChild(img);
    eltArticle.appendChild(a);

    let h2 = document.createElement("h2");
    h2.innerText = article.attributes.titre;
    eltArticle.appendChild(h2);

    let p = document.createElement("p");
    p.innerText = article.attributes.contenu;
    eltArticle.appendChild(p);




    
 }

//  for (let eltA of data.data){

//     let eltA = document.createElement("a");
//     main.appendChild(eltA);
    
//  }
}

function getTemoignage(){
    fetch(url + apiTemoignage + img)
    .then(response => response.json())
    .then(response => printTemoignages(response))
    .catch(error => alert("erreur :" + error));
}

getTemoignage();