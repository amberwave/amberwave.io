const express = require('express');
const router = express.Router();
const mqttService = require('../controllers/nodeData');

router.get('/api/mqtt', mqttService.getMessage);
router.post('/api/mqtt', mqttService.sendMessage);

module.exports = router;