import { openDB } from 'idb';
import config from '../globals/config';

const objectKey = config.idb.objects.restaurant.key;
const objectName = config.idb.objects.restaurant.name;

const dbPromise = openDB(config.idb.name, config.idb.version, {
  upgrade(database) {
    database.createObjectStore(objectName, { keyPath: objectKey });
  },
});

const RestaurantFavoriteIdb = {
  async get(id) {
    return (await dbPromise).get(objectName, id);
  },
  async getAll() {
    return (await dbPromise).getAll(objectName);
  },
  async put(item) {
    return (await dbPromise).put(objectName, item);
  },
  async delete(id) {
    return (await dbPromise).delete(objectName, id);
  },
};

export default RestaurantFavoriteIdb;
