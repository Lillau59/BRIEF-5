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

