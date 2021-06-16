import '../views/components/dw-button-like';
import '../views/components/dw-button-liked';
import RestaurantFavoriteIdb from '../datas/restaurant-favorite-idb';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await RestaurantFavoriteIdb.get(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = '<dw-button-like></dw-button-like>';

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await RestaurantFavoriteIdb.put(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = '<dw-button-liked></dw-button-liked>';

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await RestaurantFavoriteIdb.delete(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
