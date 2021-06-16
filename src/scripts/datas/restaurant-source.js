import config from '../globals/config';

const _url = config.api.restaurant.url;

class RestaurantSource {
  static async list() {
    const response = await fetch(`${_url}/list`);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(`${_url}/detail/${id}`);
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantSource;
