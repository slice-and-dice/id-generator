const winston = require('winston');

// TODO: this service should ultimately be replaced with a GUID generation process, likely made up of multiple services.
const newRandomId = () => {
  winston.info('random-id.service: newRandomId() called');

  let newId = `FSA-${Math.floor(Math.random() * Math.floor(1000000))}`;
  
  winston.info('random-id.service: newRandomId() successful');
  return newId;
}

module.exports = {
  newRandomId
};