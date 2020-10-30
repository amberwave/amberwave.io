const amqp = require('amqplib');
const util = require('util');

const rabbit_user= process.env.RABBITMQ_USER;
const rabbit_pwd = process.env.RABBITMQ_PWD;
const rabbit_host = process.env.RABBITMQ_HOST;
const rabbit_port = process.env.RABBITMQ_PORT;
const vhost = process.env.RABBIT_VHOST;

// const amql_url = util.format("amqp://%s:%s@%s:%s/%s", rabbit_user, rabbit_pwd, rabbit_host, rabbit_port, vhost);


const options = {
    protocol: 'amqp',
    hostname: rabbit_host,
    port: rabbit_port,
    username: rabbit_user,
    password: rabbit_pwd,
    vhost: vhost
}

// consume('nick-esp32', 1);
// consume('amberwave-app', 5);

module.exports.consume = async function(queue) {
    await consume(queue);
}
async function consume(queue, prefetch) {
    let node = '';
    let id = '';

    try {
        const conn = await amqp.connect(options);
        console.log('Connection Created...');

        const channel = await conn.createChannel();
        console.log('Channel Created...');

        channel.prefetch(prefetch);

        console.log(`Waiting for message from ${queue}`);
        channel.consume(queue, message => {
            nodeMsg = message.content.toString();

            if (isJSON(nodeMsg)) {
                // console.log(`JSON: ${node}`);
                return nodeMsg;
            } else {
                // console.log(`TEXT: ${node}`);
                return nodeMsg;
            }

            // if (node.id == id) {
            //     channel.ack(message);
            //     console.log("Deleted message from queue...\n")
            // } else {
            //     console.log("That is not my message, I won't delete it.");
            // }
            // console.log(node);
        });
    } catch(err) {
        console.log(`Error -> ${err}`);
    }
}

function isJSON(item) {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;

    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    if (typeof item === "object" && item !== null) {
        return true;
    }

    return false;
}