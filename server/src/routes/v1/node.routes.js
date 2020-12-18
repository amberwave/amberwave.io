const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Node = require('../../models/Node');
const Profile = require('../../models/Profile');
// import middleware

// Validation
const validateNodeInput = require('../../validation/node');

// @route   GET /v1/nodes/test
// @desc    Test nodes route
// @access  Public
router.get('/test', (req, res) => {
  res.json({ msg: 'Node Route Works' });
});

// @route   GET /v1/nodes
// @desc    Get all nodes
// @access  Public
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Node.find()
      .sort({ name: -1 })
      .then((nodes) => res.json(nodes))
      .catch((err) => res.status(404).json({ nonodesfound: 'No nodes found' }));
  }
);

// @route   GET /v1/nodes/:id
// @desc    Get node by id
// @access  Private
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Node.findById(req.params.id)
      .then((node) => res.json(node))
      .catch((err) =>
        res.status(404).json({ nonodefound: 'No node found with that ID' })
      );
  }
);

// @route   DELETE /v1/nodes/:id
// @desc    Delete node
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then((profile) => {
      Node.findById(req.params.id)
        .then((node) => {
          // Check for message owner
          if (node.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'User not authorized' });
          }
          // Delete
          node.deleteOne().then(() => {
            res.json({ success: true });
          });
        })
        .catch((err) =>
          res.status(404).json({ nodenotfound: 'Node not found' })
        );
    });
  }
);

// @route   DELETE /v1/nodes
// @desc    Delete all nodes
// @access  Private
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.find({ user: req.user.id }).then((profile) => {
      Node.find()
        .then((node) => {
          // Check for node owner
          if (node.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'User not authorized' });
          }
          // Delete
          node.deleteMany().then(() => {
            res.json({ success: true });
          });
        })
        .catch((err) =>
          res.status(404).json({ nodenotfound: 'No nodes found for user' })
        );
    });
  }
);

// @route   POST /v1/nodes
// @desc    Create a new node for user
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateNodeInput(req.body);

    if (!isValid) {
      // If any errors then send 400 with errors object
      return res.status(400).json(errors);
    }

    const newNode = new Node({
      user: req.user.id,
      key: req.body.key,
      name: req.body.name,
    });

    newNode.save().then((node) => res.json(node));
  }
);
// JSON as String message
// "{\"location\" : {\"latitude\" : \"121.638779\",\"longitude\" : \"37.339845\"}}",

module.exports = router;
