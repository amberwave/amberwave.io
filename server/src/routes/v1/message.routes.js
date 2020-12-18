const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const messageController = require('../../controllers/message.controller');

// @route   GET /v1/messages/test
// @desc    Test message route
// @access  Private
router.get('/test', messageController.test);

// @route   GET /v1/messages
// @desc    Get all messages
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  messageController.getMessages
);

// @route   GET /v1/messages/:id
// @desc    Get message by id
// @access  Private
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  messageController.getMessageById
);

// @route   DELETE /v1/messages/:id
// @desc    Delete message
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  messageController.deleteMessageById
);

// @route   POST /v1/messages
// @desc    Create a message for a node
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  messageController.createMessage
);

module.exports = router;
