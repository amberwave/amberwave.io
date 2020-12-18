const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const nodeController = require('../../controllers/node.controller');

// @route   GET /v1/nodes/test
// @desc    Test nodes route
// @access  Public
router.get('/test', nodeController.test);

// @route   GET /v1/nodes
// @desc    Get all nodes
// @access  Public
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  nodeController.getNodes
);

// @route   GET /v1/nodes/:id
// @desc    Get node by id
// @access  Private
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  nodeController.getNodeById
);

// @route   DELETE /v1/nodes/:id
// @desc    Delete node
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  nodeController.deleteNodeById
);

// @route   DELETE /v1/nodes
// @desc    Delete all nodes
// @access  Private
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  nodeController.deleteAllNodes
);

// @route   POST /v1/nodes
// @desc    Create a new node for user
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  nodeController.createNode
);

module.exports = router;
