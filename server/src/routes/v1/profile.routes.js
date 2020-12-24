const express = require('express');
const router = express.Router();
const passport = require('passport');
const profileController = require('../../controllers/profile.controller');

// @route   GET /v1/profile
// @desc    Get current users profile
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  profileController.getProfile
);

// @route   GET /v1/profile/handle/:handle
// @desc    Get Profile By Handle
// @access  Public
router.get('/handle/:handle', profileController.getHandle);

// @route   GET /v1/profile/user/:user_id
// @desc    Get Profile By User Id
// @access  Public
router.get('/user/:user_id', profileController.getUserById);

// @route   GET /v1/profile/all
// @desc    Get All User Profiles
// @access  Public
router.get('/all', profileController.getAllProfiles);

// @route   POST /v1/profile
// @desc    Create User Profile
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  profileController.createUserProfile
);

// POST Add Devices from User

// POST Remove Devices from User

module.exports = router;
