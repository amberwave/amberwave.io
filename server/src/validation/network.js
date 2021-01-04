const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.name = !isEmpty(data.name) ? data.name : '';
  data.coordinates = !isEmpty(data.coordinates) ? data.coordinates : '';
  data.topic = !isEmpty(data.topic) ? data.topic : '';

  // Validate Handle
  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Handle is required';
  }

  // Validate Name
  if (!Validator.isLength(data.name, { min: 2, max: 40 })) {
    errors.name = 'Node name needs to between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.handle = 'Node name is required';
  }

  // Validate Coordinates
  if (!Validator.isLatLong(data.coordinates)) {
    errors.name = 'Coordinates needs to be in the form lat,long or lat, long';
  }

  if (Validator.isEmpty(data.coordinates)) {
    errors.handle = 'Coordinates are required';
  }

  // Validate Topic
  if (Validator.isEmpty(data.topic)) {
    errors.handle = 'Message topic is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
