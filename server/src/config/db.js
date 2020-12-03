const mongoose = require('mongoose');

const db = process.env.MONGODB_URI;

const connectDB = async () => {
  let attempts = 10;
  while (attempts) {
    try {
      await mongoose.connect(db,  {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log('MongoDB connected...');
      // break out of loop once conncected
      break;
    } catch (err) {
      console.log("Error: ", err.message);
      attempts -= 1;
      console.log(`connection attempts left: ${attempts}`);
      // wait for 10 seconds before retrying
      await new Promise(res => setTimeout(res, 10000));
    }
  }
};

module.exports = { connectDB };