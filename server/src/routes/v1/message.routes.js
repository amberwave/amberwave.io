const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Message = require('../../models/Message');
const Node = require('../../models/Node');
const Profile = require('../../models/Profile');
// import middleware

// Validation
const validateMessageInput = require('../../validation/message');
const { route } = require('./profile.routes');

// @route   GET /v1/messages/test
// @desc    Test message route
// @access  Private
router.get('/test', (req, res) => {
  res.json({ msg: 'Post Route Works' });
});

// @route   GET /v1/messages
// @desc    Get all messages
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Message.find()
      .sort({ date: -1 })
      .then((messages) => res.json(messages))
      .catch((err) =>
        res.status(404).json({ nomessagesfound: 'No messages found' })
      );
  }
);

// @route   GET /v1/messages/:id
// @desc    Get message by id
// @access  Private
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Message.findById(req.params.id)
      .then((message) => res.json(message))
      .catch((err) =>
        res
          .status(404)
          .json({ nomessagefound: 'No message found with that ID' })
      );
  }
);

// @route   DELETE /v1/messages/:id
// @desc    Delete message
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then((profile) => {
      Message.findById(req.params.id)
        .then((message) => {
          // Check for message owner
          if (message.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'User not authorized' });
          }
          // Delete
          message.deleteOne().then(() => {
            res.json({ success: true });
          });
        })
        .catch((err) =>
          res.status(404).json({ messagenotfound: 'Message not found' })
        );
    });
  }
);

// @route   POST /v1/messages
// @desc    Create a message for a node
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateMessageInput(req.body);

    if (!isValid) {
      // If any errors then send 400 with errors object
      return res.status(400).json(errors);
    }

    const newMessage = new Message({
      message: req.body.message,
      queue: req.body.queue,
      user: req.user.id,
    });

    newMessage.save().then((message) => res.json(message));
  }
);
// JSON as String message
// "{\"location\" : {\"latitude\" : \"121.638779\",\"longitude\" : \"37.339845\"}}",

module.exports = router;
