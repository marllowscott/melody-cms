export default {
  routes: [
    {
      method: 'GET',
      path: '/global',
      handler: 'global.find',
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: 'PUT',
      path: '/global',
      handler: 'global.update',
      config: {
        policies: [],
        auth: {
          strategies: ['admin'],
        },
      },
    },
  ],
};
