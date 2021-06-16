import config from '../../globals/config';

class DWDetailRestaurant extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
  }

  _render() {
    const _categories = this._data.categories
      .map((category) => category.name).join(', ');
    const _foods = this._data.menus.foods
      .map((food) => food.name).join(', ');
    const _drinks = this._data.menus.drinks
      .map((drink) => drink.name).join(', ');
    const _reviews = this._data.customerReviews
      .map((review) => `
        <div class="review-item">
          <p class="title">
            ${review.name}
            <span>${review.date}
          </p>
          <p class="comment">${review.review}</p>
        </div>`).join('');
    this.innerHTML = `
        <h2 class="post__title">${this._data.name}</h2>
        <img class="post__poster" src="${config.api.restaurant.url}/images/medium/${this._data.pictureId}" alt="${this._data.name}" />
        <div class="post__info">
            <h4>Rating</h4>
            <p>${this._data.rating}</p>
            <h4>City</h4>
            <p>${this._data.city}</p>
            <h4>Address</h4>
            <p>${this._data.address}</p>
            <h4>Categories</h4>
            <p>${_categories}</p>
        </div>
        <div class="post__overview">
            <h4>Foods</h3>
            <p>${_foods}</p>
            <h4>Drinks</h3>
            <p>${_drinks}</p>
            <h4>Description</h3>
            <p>${this._data.description}</p>
            <h4>Reviews</h4>
            <div class="post__reviews">${_reviews}</div>
        </div>
        `;
  }
}

customElements.define('dw-detail-restaurant', DWDetailRestaurant);
