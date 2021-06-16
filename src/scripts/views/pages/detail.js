import '../components/dw-detail-restaurant';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../datas/restaurant-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="post" class="post"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detail(url.id);
    const restaurantContainer = document.querySelector('#post');

    const _restaurant = document.createElement('dw-detail-restaurant');
    _restaurant.value = restaurant;
    restaurantContainer.innerHTML = _restaurant.innerHTML;

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },
};

export default Detail;
