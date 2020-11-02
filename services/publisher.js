const amqp = require('amqplib');
const util = require('util');
const connection = require('../utils/rabbitmq');

const cmds = [
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "4320", "node-type":"EPA", "command":"shutdown"}
]

//publish('amberwave-app', cmds);
module.exports.publish = async function(queue, msgs) {
     await publish(queue, msgs);
}

async function publish(queue, msgs) {

    try {
        const conn = await connection;
        console.log('Connection Created...');

        const channel = await conn.createChannel();
        console.log('Channel Created...');

        const res = await channel.assertQueue(queue);
        console.log(`Queue created... ${queue}`);

        for (let msg in msgs) {
            await channel.sendToQueue(queue, Buffer.from(JSON.stringify(msgs[msg])));
            console.log(`Message sent to queue ${queue}`);
        }
        channel.close();
    } catch(err) {
        console.log(`Error -> ${err}`);
    }
}