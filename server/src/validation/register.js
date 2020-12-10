const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  console.log(data);

  data.name               = !isEmpty(data.name) ? data.name : '';
  data.email              = !isEmpty(data.email) ? data.email : '';
  data.password           = !isEmpty(data.password) ? data.password : '';
  data.passwordConfirmed  = !isEmpty(data.passwordConfirmed) ? data.passwordConfirmed : '';

  if(!Validator.isLength(data.name, { min: 2, max: 30})) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if(Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if(Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if(!Validator.isLength(data.password, {min: 8, max: 30})) {
    errors.password = 'Password must be at least 8 characters';
  }

  if(Validator.isEmpty(data.passwordConfirmed)) {
    errors.passwordConfirmed = 'Confirmed Password is required';
  }

  if(!Validator.equals(data.password, data.passwordConfirmed)) {
    errors.passwordConfirmed = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}