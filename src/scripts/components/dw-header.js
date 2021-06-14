import config from '../config';

class DWHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <div class="header__inner">
                    <h1 class="header__title">
                        ${config.site.title}
                    </h1>
                    <nav id="drawer" class="nav">
                        <ul class="nav__list">
                            <li class="nav__item"><a href="/">Home</a></li>
                            <li class="nav__item"><a href="#">Favorite</a></li>
                            <li class="nav__item"><a href="${config.social.github}">About Us</a></li>
                        </ul>
                    </nav>
                    <a id="menu" class="header__menu">☰</a>
                </div>
            </header>
        `;
    }

}

customElements.define('dw-header', DWHeader);