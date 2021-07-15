import config from '../../globals/config';

class DWItemRestaurant extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
  }

  _render() {
    this.innerHTML = `
        <article class="post-item">
            <img class="lazyload post-item__thumbnail" data-src="${config.api.restaurant.url}/images/medium/${this._data.pictureId}"
                alt="${this._data.name}">
            <div class="post-item__content">
                <p class="post-item__date">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    &nbsp;${this._data.rating}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp;${this._data.city}
                </p>
                <h1 class="post-item__title">
                    <a href="${`/#/detail/${this._data.id}`}">
                        ${this._data.name}
                    </a>
                </h1>
                <p class="post-item__description">
                    ${this._data.description}
                </p>
            </div>
        </article>
        `;
  }
}

customElements.define('dw-item-restaurant', DWItemRestaurant);
