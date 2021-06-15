import config from '../config';

class DWHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <div class="header__inner">
                    <h1 class="header__title">
                        ${config.site.title}
                    </h1>
                    <a aria-label="Menu" href="#" id="menu" class="header__menu">☰</a>
                    <nav id="drawer" class="nav">
                        <ul class="nav__list">
                            <li class="nav__item"><a href="/">Home</a></li>
                            <li class="nav__item"><a href="#">Favorite</a></li>
                            <li class="nav__item"><a href="${config.social.github}">About Us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    }

}

customElements.define('dw-header', DWHeader);