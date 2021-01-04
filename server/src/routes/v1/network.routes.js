const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const networkController = require('../../controllers/network.controller');

// @route   GET /v1/network/all
// @desc    Get all networks
// @access  Public
router.get(
  '/all',
  passport.authenticate('jwt', { session: false }),
  networkController.getNetworks
);

// @route   GET /v1/node/:id
// @desc    Get Network by ID
// @access  Private
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  networkController.getNetwork
);

// @route   DELETE /v1/network/:id
// @desc    Delete Network by Id
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  networkController.deleteNetwork
);

// @route   PATCH /v1/network/:id
// @desc    Update network by id
// @access  Private
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  networkController.updateNetwork
);

// @route   POST /v1/network
// @desc    Create a new network
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  networkController.createNetwork
);

module.exports = router;
