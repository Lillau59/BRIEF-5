let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')
let input = document.querySelector('section.rechercheopen')

link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open')
  ul.classList.toggle('open')
  input.classList.toggle('open')
})

let lautre = document.getElementById('lautre')
let lautreimput = document.querySelector('section.rechercheopen')

lautre.addEventListener('click', function(e) {
    e.preventDefault()
    lautreimput.classList.toggle('ouvrir')
    .classList.toggle('ouvrir')
  })