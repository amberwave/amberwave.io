const Validator = require('validator');
const isEmpty = require('./isEmpty');

// TODO Add JSON validator for messages
// TODO Add Queue structure validator for queues
module.exports = function validateMessageInput(data) {
  let errors = {};

  data.message = !isEmpty(data.message) ? data.message : '';
  data.queue = !isEmpty(data.queue) ? data.queue : '';

  if (Validator.isEmpty(data.message)) {
    errors.message = 'Message cannot be empty';
  }

  if (Validator.isEmpty(data.queue)) {
    errors.queue = 'Queue field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
