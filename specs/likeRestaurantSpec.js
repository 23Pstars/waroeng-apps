import RestaurantFavoriteIdb from '../src/scripts/datas/restaurant-favorite-idb';
import * as TestFactories from './helpers/testFactories';

const _ID  = 1;

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: _ID });

    expect(document.querySelector('[aria-label="like this"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: _ID });

    expect(document.querySelector('[aria-label="unlike this"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: _ID });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await RestaurantFavoriteIdb.get(_ID);

    expect(restaurant).toEqual({ id: _ID });

    RestaurantFavoriteIdb.delete(_ID);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: _ID });

    await RestaurantFavoriteIdb.put({ id: _ID });
    
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await RestaurantFavoriteIdb.getAll()).toEqual([{ id: _ID }]);

    RestaurantFavoriteIdb.delete(_ID);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await RestaurantFavoriteIdb.getAll()).toEqual([]);
  });
});
