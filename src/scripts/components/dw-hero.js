import config from '../config';

class DWHero extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="hero">
                <div class="hero__inner">
                    <h1 class="hero__title">${config.hero.title}</h1>
                    <p class="hero__tagline">
                        ${config.hero.description}
                    </p>
                </div>
            </div>
        `;
    }

}

customElements.define('dw-hero', DWHero);