import RestaurantFavoriteIdb from '../src/scripts/datas/restaurant-favorite-idb';
import * as TestFactories from './helpers/testFactories';

const _ID = 1;

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await RestaurantFavoriteIdb.put({ id: _ID });
  });

  afterEach(async () => {
    await RestaurantFavoriteIdb.delete(_ID);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: _ID });

    expect(document.querySelector('[aria-label="unlike this"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: _ID });

    expect(document.querySelector('[aria-label="like this"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: _ID });

    document.querySelector('[aria-label="unlike this"]').dispatchEvent(new Event('click'));

    expect(await RestaurantFavoriteIdb.getAll()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: _ID });

    await RestaurantFavoriteIdb.delete(_ID);

    document.querySelector('[aria-label="unlike this"]').dispatchEvent(new Event('click'));

    expect(await RestaurantFavoriteIdb.getAll()).toEqual([]);
  });
});
