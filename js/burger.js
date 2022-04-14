let link = document.getElementById('link');
let burger = document.getElementById('burger');
let ul = document.querySelector('ul');
let navup = document.querySelector('div.navup')
let title = document.querySelector('div.title')

link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open');
  ul.classList.toggle('open');
  navup.classList.toggle('open');
  title.classList.toggle('open')
})

