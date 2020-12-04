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
