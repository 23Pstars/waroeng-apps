const config = {
  api: {
    restaurant: {
      url: 'https://restaurant-api.dicoding.dev/',
    },
  },
  cache: {
    name: 'WaroengApp-v0.0.1',
  },
  idb: {
    name: 'WaroengApp-db',
    version: 1,
    objects: {
      restaurant: {
        key: 'id',
        name: 'restaurant',
      },
    },
  },
  site: {
    title: 'Waroeng\'s Portal',
    company: 'Waroeng Inc.',
  },
  hero: {
    title: 'The best cureated Cafes in Town',
    description: 'Appropriately deploy clicks-and-mortar information before frictionless bandwidth. Phosfluorescently.',
  },
  social: {
    github: 'https://github.zaf.web.id',
  },
};

export default config;
