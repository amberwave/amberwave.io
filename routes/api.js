const express = require('express');
const router = express.Router();
const covidDataController = require('../controllers/covidData');
const mqttService = require('../services/MQService');

router.post('/api', covidDataController.postDataByCol);
// router.post('/api/mqtt', mqttService.receiveMessage);

module.exports = router;