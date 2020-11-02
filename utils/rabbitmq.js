const amqp = require('amqplib');
const util = require('util');
const nodeData = require('../controllers/nodeData');

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

async function createConnection(options) {
    const conn = await amqp.connect(options);

    conn.on("error", function(err) {
        console.error("Connection error:",err.message);
    });

    conn.on("close", function(err) {
        console.error("Connection closed:", err.message);
    });

    console.log(`Rabbitmq connection at ${options.hostname}:${options.port}`);
    return conn;
}

module.exports = createConnection(options);