const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../../controllers/auth.controller');

// @route   Post /v1/auth/register
// @desc    Register
// @access  Public
router.post('/register', authController.register);

// @route   POST /v1/auth/login
// @desc    Login
// @access  Public
router.post('/login', authController.login);

// @route   GET /v1/auth/current
// @desc    Return current authneticated user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  authController.current
);

// router.post('/refresh-tokens', validate(authValidation.refreshTokens), authController.refreshTokens);
// router.post('/forgot-password', validate(authValidation.forgotPassword), authController.forgotPassword);
// router.post('/reset-password', validate(authValidation.resetPassword), authController.resetPassword);

module.exports = router;
