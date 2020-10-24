

const CONN_URL = 'amqp:52.52.126.255';
let ch = null;

exports.sendMessage = (req, res, next) => {
    console.log("Client Request Recieved!");
    const msg = req.body;
    console.log(msg);

    amqp.connect(CONN_URL, function(error0, connection) {
        if (error0) {
            throw error0;
        }

        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }
            var queue = 'amberwave-app';

            channel.assertQueue(queue, {
                durable: false
            });

            channel.sendToQueue(queue, Buffer.from(msg));
            console.log(" [x] Sent %s", msg);
            res.status(200).json(msg);

        });

        setTimeout(function() {
            connection.close();
            process.exit(0);
        }, 500);
    });
}

exports.receiveMessage(amqp.connect(CONN_URL, function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'hello';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
}));