const { randomIdService } = require("../../services/");
const winston = require("winston");

module.exports = () => {
  winston.info(`generate.controller called`);

  const newId = randomIdService.newRandomId();
  const result = { registrationId: newId };

  winston.info(`generate.controller successful`);
  return result;
};
