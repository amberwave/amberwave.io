const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Load User Model
const User = require('../models/User');

// Load Input Validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

// JWT Key
const secretOrKey = process.env.SECRET_OR_KEY;

// @route   Post /v1/auth/register
// @desc    Register
// @access  Public
exports.register = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200', // size
        r: 'pg', // rating
        d: 'mm', // default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar: avatar,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            console.log(err);
          }
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
};

// @route   POST /v1/auth/login
// @desc    Login
// @access  Public
exports.login = (req, res, next) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find the user by email
  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User match
        const payload = { id: user.id, name: user.name, avatar: user.avatar }; // Create JWT payload

        // Sign Token
        jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: 'Bearer ' + token,
          });
        });
      } else {
        errors.password = 'Password is incorrect';
        return res.status(400).json(errors);
      }
    });
  });
};

// @route   GET /v1/auth/current
// @desc    Return current authneticated user
// @access  Private
exports.current = (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
  });
};
