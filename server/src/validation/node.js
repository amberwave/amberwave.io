const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateNodeInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.key = !isEmpty(data.key) ? data.key : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.key)) {
    errors.key = 'Key field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
