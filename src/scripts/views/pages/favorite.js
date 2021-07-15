import '../components/dw-hero';
import '../components/dw-item-restaurant';
import RestaurantFavoriteIdb from '../../datas/restaurant-favorite-idb';

const Favorite = {
  async render() {
    return `
    <section>
        <div class="latest">
            <h1 class="latest__label">Favorite</div>
            <div id="posts" class="posts">

            </div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const list = await RestaurantFavoriteIdb.getAll();
    const listContainer = document.querySelector('#posts');
    if (list.length > 0) {
      list.forEach((item) => {
        const _item = document.createElement('dw-item-restaurant');
        _item.value = item;
        listContainer.appendChild(_item);
      });
    } else {
      listContainer.innerHTML = '<div class="post-item__empty">No favorite restaurant.</div>';
    }
  },
};

export default Favorite;
