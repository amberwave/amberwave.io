const conn = require('../utils/rabbitmq');

// consume('nick-esp32', 1);
//consume('amberwave-app', 1);

module.exports.consume = async function(queue, prefetch) {
    await consume(queue, prefetch);
}
async function consume(queue, prefetch) {
    let node = '';
    let id = '';

    // Resolving connection promise from other file first
    // then resolving promise for channel creation 
    //const channel = await (await conn).createChannel(); 
    const connection = await conn;
    const channel = await connection.createChannel();

    console.log('Channel Created...');

    channel.prefetch(prefetch);

    console.log(`Waiting for message from ${queue}`);

    channel.consume(queue, message => {
        onMessage(message);
    }).catch(error => console.log(error));
}

function onMessage(msg) {
    let nodeMsg = msg.content.toString();
    console.log(`[x] Consume onMessage: ${nodeMsg}`);
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