const Search = require('./search');
const Consumer = require('../services/consumer');
const Publisher = require('../services/publisher');

// The rows are passed to the ejs view as a js object as defined
// in models/developer.js 
exports.getMessage = (req, res, next) => {
    //const message = 'Hello World!';
    const queue = 'amberwave-app';
    const prefetch = 1;
    Consumer.consume(queue, prefetch).then(result => {
        console.log(`[] Receiving Message from ${queue}`);
        console.log(result);
        res.status(200).json(result);
    }).catch(err => console.log(err));
};

// A single row of the table is passed to the devs object
exports.sendMessage = (req, res, next) => {
    const message = req.body;
    console.log(message);
    Publisher.publish('amberwave-app', message).then(() => {
        res.status(200).json('Message Publish Sucessful');   
    }).catch(err => console.log(err));
};
