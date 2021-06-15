import config from '../global/config';

const _url = config.api.restaurant.url;

class RestaurantSource {

    static async list() {
        const response = await fetch(`${_url}/list`);
        const responseJson = await response.json();
        return responseJson.results;
    }

}

export default RestaurantSource;