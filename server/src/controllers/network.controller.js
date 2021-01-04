// Load Validation
const validateNetworkInput = require('../validation/network');

// Load Profile Model
const Network = require('../models/Network');

// @route   GET /v1/network
// @desc    Get a single network
// @access  Private
exports.getNetwork = (req, res) => {
  const errors = {};

  Network.findOne({ user: req.user.id, name: req.body.name })
    .populate('user', ['name', 'avatar'])
    .then((network) => {
      if (!network) {
        errors.nonetwork = 'No networks found for this user';
        return res.status(404).json(errors);
      }
      res.json(network);
    })
    .catch((err) => res.status(404).json({ network: 'No network found' }));
};

// @route   GET /v1/networks
// @desc    Get all networks associated with user
// @access  Private
exports.getNetworks = (req, res) => {
  const errors = {};

  Network.findAll({ user: req.user.id })
    .populate('user', ['name', 'avatar'])
    .then((networks) => {
      if (!networks) {
        errors.nonetworks = 'No networks found for this user';
        return res.status(404).json(errors);
      }
      res.json(networks);
    })
    .catch((err) => res.status(404).json(err));
};

// @route   POST /v1/network
// @desc    Create a new network
// @access  Private
exports.createNetwork = (req, res) => {
  const { errors, isValid } = validateNetworkInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const networkFields = {};
  networkFields.user = req.body.user;
  networkFields.name = req.body.name;

  // networkNodes.forEach(node => console.log(node));
  Network.findOne({ user: req.user.id, name: req.body.name }).then(
    (network) => {
      if (network) {
        errors.network = 'Network already exists';
        return res.status(400).json(errors);
      } else {
        // Save Profile
        new Network(networkFields)
          .save()
          .then((network) => res.status(201).json(network));
      }
    }
  );
};

// @route   PATCH /v1/network
// @desc    Update a network
// @access  Private
exports.updateNetwork = (req, res) => {
  const { errors, isValid } = validateNetworkInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const networkFields = {};
  networkFields.user = req.body.user;
  networkFields.name = req.body.name;
  networkFields.nodes = req.body.nodes; // Update node array on frontend

  // networkNodes.forEach(node => console.log(node));
  Network.findOne({ user: req.user.id, name: req.body.name }).then(
    (network) => {
      if (!network) {
        errors.nonetwork = 'No network found by that name';
        return res.status(404).json(errors);
      }

      networkFields.nodes.forEach((node) => {
        if (network.nodes.includes(node.id)) {
          errors.duplicate_node = 'Node already exists in network';
          return res.status(400).json(errors);
        }
      });

      Network.findOneAndUpdate(
        { user: req.user.id },
        { $set: networkFields },
        { new: true }
      ).then((network) => res.status(201).json(network));
    }
  );
};

// @route   Delete /v1/network
// @desc    Delete user network(s)
// @access  Private
exports.deleteNetwork = (req, res) => {
  const errors = {};
  const networkFields = {};
  networkFields.user = req.user.id;
  networkFields.name = req.body.name;

  Network.findOne({ user: networkFields.user, name: networkFields.name })
    .then((network) => {
      if (!network) {
        errors.nonetwork = 'No network found by that name';
        return res.status(404).json(errors);
      }
      // Delete
      network.deleteOne().then(() => {
        res.status(200).json({ success: true });
      });
    })
    .catch((err) => res.status(404).json(err));
};
