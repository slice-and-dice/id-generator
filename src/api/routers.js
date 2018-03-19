const { Router } = require('express');
const generate = require('./generate');

module.exports = () => {
  const router = Router();

  router.use('/generate', generate());

  return router;
};
