const { Router } = require('express');
const generateController = require('./generate.controller.js');

module.exports = () => {
  const router = Router();

  router.get('', (req, res) => {
    res.send(generateController());
  });

  return router;
};
