import '../components/dw-hero';
import '../components/dw-item-restaurant';
import RestaurantSource from '../../datas/restaurant-source';

const Home = {
  async render() {
    return `
    <dw-hero></dw-hero>
    <section>
        <div class="latest">
            <h1 class="latest__label">Discover</div>
            <div id="posts" class="posts">

            </div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const list = await RestaurantSource.list();
    const listContainer = document.querySelector('#posts');
    list.forEach((restaurant) => {
      const _restaurant = document.createElement('dw-item-restaurant');
      _restaurant.value = restaurant;
      listContainer.appendChild(_restaurant);
    });
  },
};

export default Home;
