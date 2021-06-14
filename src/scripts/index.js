import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../scripts/components/dw-header.js';
import '../scripts/components/dw-hero.js';
import '../scripts/components/dw-list.js';
import '../scripts/components/dw-footer.js';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});



const list = document.querySelector('dw-list');

fetch('../DATA.json')
    .then(response => response.json())
    .then(data => list.value = data.restaurants);