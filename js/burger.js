let link = document.getElementById('link');
let burger = document.getElementById('burger');
let ul = document.querySelector('ul');
let navup = document.querySelector('.navup');
let navdown = document.querySelector('.navdown');
let body = document.querySelector('body');

link.addEventListener('click', function (e) {
  e.preventDefault()
  burger.classList.toggle('open');
  ul.classList.toggle('open');
  navup.classList.toggle('open');
  navdown.classList.toggle('open');
  body.classList.toggle('open');
})

