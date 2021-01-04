// Load Validation
const validateNetworkInput = require('../validation/network');

// Load Network Model
const Network = require('../models/Network');

// Load User Model
const User = require('../models/User');

exports.getNetwork = (req, res) => {
  const errors = {};

  Network.findOne({ user: req.user.id })
    .populate('user', ['name', 'avatar'])
    .then((network) => {
      if (!network) {
        errors.nonetwork = 'There is no network for this user';
        return res.status(404).json(errors);
      }
      res.json(network);
    })
    .catch((err) => res.status(404).json(err));
};

exports.getHandle = (req, res) => {
  const errors = {};

  Network.findOne({ handle: req.params.handle })
    .populate('user', ['name', 'avatar'])
    .then((network) => {
      if (!network) {
        errors.nonetwork = 'There is no network for this user';
        res.status(404).json(errors);
      }

      res.json(network);
    })
    .catch((err) => res.status(404).json(err));
};

exports.getUserById = (req, res) => {
  const errors = {};

  Network.findOne({ handle: req.params.user_id })
    .populate('user', ['name', 'avatar'])
    .then((network) => {
      if (!network) {
        errors.nonetwork = 'There is no network for this user';
        res.status(404).json(errors);
      }

      res.json(network);
    })
    .catch((err) => res.status(404).json(err));
};

exports.getAllNetworks = (req, res) => {
  const errors = {};

  Network.find()
    .populate('user', ['name', 'avatar'])
    .then((networks) => {
      if (!networks) {
        errors.nonetwork = 'There is no networks';
        res.status(404).json(errors);
      }

      res.json(networks);
    })
    .catch((err) => res.status(404).json({ network: 'There are no networks' }));
};

exports.createUserNetwork = (req, res) => {
  const { errors, isValid } = validateNetworkInput(req.body);

  // Check Validation
  if (!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }
  // Get Fields
  const networkFields = {};
  networkFields.user = req.user.id;
  if (req.body.handle) networkFields.handle = req.body.handle;
  if (req.body.name) networkFields.name = req.body.name;
  if (req.body.type) networkFields.type = req.body.type;
  if (req.body.coordinates) networkFields.coordinates = req.body.coordinates;
  if (req.body.status) networkFields.status = req.body.status;
  if (req.body.topic) networkFields.topic = req.body.topic;

  // Split into array
  /*
  if(typeof req.body.skills !== 'undefined') {
    networkFields.skills = req.body.skills.split(',');
  }
*/

  /*
  TODO Create Network and Add first node to network
      If network does not exist then
        - Check if node handle exists
        - Create network
        - Create node (Attach to user)
        - Add new node to network
        
*/

  Network.findOne({ user: req.user.id }).then((network) => {
    if (network) {
      // Update
      Network.findOneAndUpdate(
        { user: req.user.id },
        { $set: networkFields },
        { new: true }
      ).then((network) => res.json(network));
    } else {
      // Create

      // Check if handle exists
      Network.findOne({ handle: networkFields.handle }).then((network) => {
        if (network) {
          errors.handle = 'That handle already exists';
          res.status(400).json(errors);
        }

        // Save network
        new Network(networkFields).save().then((network) => res.json(network));
      });
    }
  });
};
