const amqp = require('amqplib');
const util = require('util');
const channel = require('../utils/rabbitmq');

const cmds = [
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2324", "node-type":"EPA", "command":"update"},
    {"id": "1583", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2104", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "8304", "node-type":"EPA", "command":"update"},
    {"id": "4983", "node-type":"EPA", "command":"update"},
    {"id": "1902", "node-type":"EPA", "command":"reset"},
    {"id": "2234", "node-type":"EPA", "command":"update"},
    {"id": "1523", "node-type":"EPA", "command":"update"},
    {"id": "0633", "node-type":"EPA", "command":"reset"},
    {"id": "6958", "node-type":"EPA", "command":"update"},
    {"id": "2384", "node-type":"EPA", "command":"update"},
    {"id": "4957", "node-type":"EPA", "command":"reset"},
    {"id": "2846", "node-type":"EPA", "command":"update"},
    {"id": "1444", "node-type":"EPA", "command":"update"},
    {"id": "4444", "node-type":"EPA", "command":"reset"},
    {"id": "2488", "node-type":"EPA", "command":"update"},
    {"id": "2945", "node-type":"EPA", "command":"update"},
    {"id": "4967", "node-type":"EPA", "command":"reset"},
    {"id": "2947", "node-type":"EPA", "command":"update"},
    {"id": "5964", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "1983", "node-type":"EPA", "command":"update"},
    {"id": "1592", "node-type":"EPA", "command":"reset"},
    {"id": "2304", "node-type":"EPA", "command":"update"},
    {"id": "4320", "node-type":"EPA", "command":"shutdown"}
]

publish('amberwave-app', cmds);
module.exports.publish = async function(queue, msgs) {
     await publish(queue, msgs);
}

async function publish(queue, msgs) {

    try {

        const ch = await channel;
        console.log('Channel Created...');

        const res = await ch.assertQueue(queue);
        console.log(`Queue created... ${queue}`);

        for (let msg in msgs) {
            await ch.sendToQueue(queue, Buffer.from(JSON.stringify(msgs[msg])));
            console.log(`Message sent to queue ${queue}`);
        }
    } catch(err) {
        console.log(`Error -> ${err}`);
    }
}