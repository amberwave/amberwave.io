const express = require('express');
const router = express.Router();
const covidDataController = require('../controllers/covidData');
const mqttService = require('../controllers/nodeData');

router.post('/api/search', covidDataController.postDataByCol);

router.get('/api/mqtt', mqttService.getMessage);
router.post('/api/mqtt', mqttService.sendMessage);

module.exports = router;