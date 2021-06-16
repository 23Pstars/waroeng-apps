import config from '../../globals/config';

class DWDetailRestaurant extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
  }

  _render() {
    this.innerHTML = `
        <h1 class="post__title">${this._data.name}</h2>
        <img class="post__poster" src="${config.api.restaurant.url}/images/medium/${this._data.pictureId}" alt="${this._data.name}" />
        <div class="post__info">
            <h3>Information</h3>
            <h4>Tagline</h4>
            <p>${this._data.tagline}</p>
            <h4>Release Date</h4>
            <p>${this._data.release_date}</p>
            <h4>Duration</h4>
            <p>${this._data.runtime} minutes</p>
            <h4>Rating</h4>
            <p>${this._data.vote_average}</p>
        </div>
        <div class="post__overview">
            <h3>Overview</h3>
            <p>${this._data.overview}</p>
        </div>
        `;
  }
}

customElements.define('dw-detail-restaurant', DWDetailRestaurant);
