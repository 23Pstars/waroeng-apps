import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './views/components/dw-header';
import './views/components/dw-hero';
import './views/components/dw-footer';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
