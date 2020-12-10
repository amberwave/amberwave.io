const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Load User Model
const User = require('../../models/User');

// JWT Key
const secretOrKey = process.env.SECRET_OR_KEY;

// @route   Post /v1/auth/register
// @desc    Register
// @access  Public
router.post('/register', (req, res, next) => {
  User.findOne({ email: req.body.email }).then(user => {
    if(user) {
      return res.status(400).json({email: 'Email already exists'})
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200', // size
        r: 'pg',  // rating
        d: 'mm'   // default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar: avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) {
            console.log(err);
          }
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        })
      })
    }
  })
});

// @route   POST /v1/auth/login
// @desc    Login
// @access  Public
router.post('/login', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find the user by email
  User.findOne({email})
    .then(user => {
      if(!user) {
        return res.status(404).json({email: 'User not found'});
      }

    // Check password
    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if(isMatch) {
          // User match
          const payload = { id: user.id, name: user.name, avatar: user.avatar } // Create JWT payload
      
          // Sign Token   
          jwt.sign(
            payload, 
            secretOrKey, 
            { expiresIn: 3600 }, 
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              })
          });
        } else {
          return res.status(400).json({password: 'Password incorrect'});
        }
      })
    })
})

// @route   GET /v1/auth/current
// @desc    Return current authneticated user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    }) 
  }
);

// router.post('/register', validate(authValidation.register), authController.register);
// router.post('/login', validate(authValidation.login), authController.login);
// router.post('/logout', validate(authValidation.logout), authController.logout);
// router.post('/refresh-tokens', validate(authValidation.refreshTokens), authController.refreshTokens);
// router.post('/forgot-password', validate(authValidation.forgotPassword), authController.forgotPassword);
// router.post('/reset-password', validate(authValidation.resetPassword), authController.resetPassword);

module.exports = router;