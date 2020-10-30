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
        const conn = await amqp.connect(options);
        console.log('Connection Created...');


        const channel = await conn.createChannel();
        console.log('Channel Created...');

        const res = await channel.assertQueue(queue);
        console.log(`Queue created... ${queue}`);

        for (let msg in msgs) {
            await channel.sendToQueue(queue, Buffer.from(JSON.stringify(msgs[msg])));
            console.log(`Message sent to queue ${queue}`);
        }

    } catch(err) {
        console.log(`Error -> ${err}`);
    }
}

// module.exports.publish = async function() {
//     await publish();
// }

// const publish = async function publish(){
//     console.log("Publishing");
//     const conn = await amqplib.connect(amql_url, "heartbeat=60");
//     const ch = await conn.createChannel();
//     const exchange = 'amq.topic';
//     const queue = 'amberwave-app';
//     const routeKey = 'amberwave-app';
//     let msg = 'Hello World!';
//     await ch.assertExchange(exchange, 'direct', {durable: true}).catch(console.error);
//     await ch.assertQueue(queue, {durable: true});
//     await ch.bindQueue(queue, exchange, routeKey);
//     await ch.publish(exchange, routeKey, Buffer.from(msg));
//     setTimeout( function()  {
//         ch.close();
//         conn.close();},  500 );
// }

// exports.sendMessage = (req, res, next) => {
//     console.log("Client Request Recieved!");
//     const msg = req.body;
//     console.log(msg);

//     amqp.connect(CONN_URL, options, function(error0, connection) {
//         if (error0) {
//             throw error0;
//         }

//         connection.createChannel(function(error1, channel) {
//             if (error1) {
//                 throw error1;
//             }
//             var queue = 'amberwave-app-send';

//             channel.assertQueue(queue, {
//                 durable: false
//             });

//             channel.sendToQueue(queue, Buffer.from(msg));
//             console.log(" [x] Sent %s", msg);
//             res.status(200).json(msg);

//         });

//         setTimeout(function() {
//             connection.close();
//             process.exit(0);
//         }, 500);
//     });
// }

// exports.receiveMessage = (req, res, next) => {
//     amqp.connect(CONN_URL, options, function(error0, connection) {
//         if (error0) {
//             throw error0;
//         }
//         connection.createChannel(function(error1, channel) {
//             if (error1) {
//                 throw error1;
//             }
    
//             var queue = 'amber-wave-app-rec';
    
//             channel.assertQueue(queue, {
//                 durable: false
//             });
    
//             console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    
//             channel.consume(queue, function(msg) {
//                 console.log(" [x] Received %s", msg.content.toString());
//                 res.send.json(msg.content.toString());
//             }, {
//                 noAck: true
//             });
//         });
//     });
// };

