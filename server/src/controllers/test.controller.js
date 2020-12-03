exports.getSuccess = (req, res, next) => {
    let msg = 'MongoDB@' + process.env.MONGODB_PORT + ': ' + (new Date());
    res.status(200).send({ text: msg })
};

exports.postSuccess = (req, res, next) => {
    let msg = req.body.msg;
    msg = 'From Server - ' + msg;
    res.status(200).send({ text: msg })
};