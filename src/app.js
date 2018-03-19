const express = require('express');
const routers = require('./api/routers');

module.exports = () => {
  const app = express();

  app.use('/', routers());

  return app;
};
