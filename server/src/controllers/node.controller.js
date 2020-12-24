<<<<<<< HEAD
const Search = require('./search');
const Consumer = require('../server/src/services/consumer');
const Publisher = require('../services/publisher');
const asyncHandler = require('express-async-handler');
const channel = require('../utils/rabbitmq');

// The rows are passed to the ejs view as a js object as defined
// in models/developer.js
exports.getMessage = asyncHandler(async (req, res, next) => {
    //const message = 'Hello World!';
    const queue = 'amberwave-app';
    const prefetch = 1;

    const ch = await channel; 

    console.log('Channel Created...');

    ch.prefetch(prefetch);

    console.log(`Waiting for message from ${queue}`);

    let nodeMsg = '';
    let messages = {
        node: []
    };
    ch.consume(queue, message => {

        nodeMsg = message.content.toString();
        console.log(`[x] Consume onMessage: ${nodeMsg}`);

        let msgItem = [JSON.parse(nodeMsg)];
        msgItem.map(function(item) {        
            messages.node.push({ 
                "id"         : item.id,
                "node-type"  : item["node-type"],
                "command"    : item.command 
            });
        });

        if (messages.node.length === prefetch) {
            console.log(messages);
            res.status(200).json(messages);
        }
    }).catch(error => console.log(error));
});

// A single row of the table is passed to the devs object
exports.sendMessage = asyncHandler(async (req, res, next) => {
    const message = req.body;
    console.log(message);
    Publisher.publish('amberwave-app', message).then(() => {
        res.status(200).json('Message Publish Sucessful');   
    }).catch(err => console.log(err));
});
=======
const Node = require('../models/Node');
const Profile = require('../models/Profile');
// import middleware

// Validation
const validateNodeInput = require('../validation/node');

// @route   GET /v1/nodes/test
// @desc    Test nodes route
// @access  Public
exports.test = (req, res) => {
  res.json({ msg: 'Node Route Works' });
};

// @route   GET /v1/nodes
// @desc    Get all nodes
// @access  Public
exports.getNodes = (req, res) => {
  Node.find()
    .sort({ name: -1 })
    .then((nodes) => res.json(nodes))
    .catch((err) => res.status(404).json({ nonodesfound: 'No nodes found' }));
};

// @route   GET /v1/nodes/:id
// @desc    Get node by id
// @access  Private
exports.getNodeById = (req, res) => {
  Node.findById(req.params.id)
    .then((node) => res.json(node))
    .catch((err) =>
      res.status(404).json({ nonodefound: 'No node found with that ID' })
    );
};

// @route   DELETE /v1/nodes/:id
// @desc    Delete node
// @access  Private
exports.deleteNodeById = (req, res) => {
  Profile.findOne({ user: req.user.id }).then((profile) => {
    Node.findById(req.params.id)
      .then((node) => {
        // Check for message owner
        if (node.user.toString() !== req.user.id) {
          return res.status(401).json({ notauthorized: 'User not authorized' });
        }
        // Delete
        node.deleteOne().then(() => {
          res.json({ success: true });
        });
      })
      .catch((err) => res.status(404).json({ nodenotfound: 'Node not found' }));
  });
};

// @route   DELETE /v1/nodes
// @desc    Delete all nodes
// @access  Private
exports.deleteAllNodes = (req, res) => {
  Profile.find({ user: req.user.id }).then((profile) => {
    Node.find()
      .then((node) => {
        // Check for node owner
        if (node.user.toString() !== req.user.id) {
          return res.status(401).json({ notauthorized: 'User not authorized' });
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
};

// @route   POST /v1/nodes
// @desc    Create a new node for user
// @access  Private
exports.createNode = (req, res) => {
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
};
// JSON as String message
// "{\"location\" : {\"latitude\" : \"121.638779\",\"longitude\" : \"37.339845\"}}",
>>>>>>> dev
