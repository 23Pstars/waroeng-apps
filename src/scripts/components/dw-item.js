import config from '../global/config';

class DWItem extends HTMLElement {

    set value(data) {
        this._data = data;
        this._render();
    }

    _render() {
        this.innerHTML = `
            <article class="post-item">
                <img class="post-item__thumbnail" src="${this._data.pictureId}"
                    alt="${this._data.name}">
                <div class="post-item__content">
                    <p class="post-item__date">
                        ⭐️ ${this._data.rating}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <strong>${this._data.city}</strong>
                    </p>
                    <h1 class="post-item__title">
                        ${this._data.name}
                    </h1>
                    <p class="post-item__description">
                        ${this._data.description}
                    </p>
                </div>
            </article>
        `;
    }

}

customElements.define('dw-item', DWItem);