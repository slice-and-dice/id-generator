const { randomIdService } = require('../../services/');
const winston = require('winston');

module.exports = () => {
  winston.info(`generate.controller called`);

  let newId = randomIdService.newRandomId();

  winston.info(`generate.controller successful`);
  return newId;
};