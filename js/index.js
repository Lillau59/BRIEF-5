fetch('../img/carte.svg')
.then(function(response) {
    return response.text();
})
.then(function(response) {  
    document.querySelector('#carte-svg').innerHTML = response;
}).catch(function(error) {
    console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
});