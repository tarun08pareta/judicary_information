const mongoose = require('mongoose');
// const config = require('config');

// Connect to MongoDB server
const connectdb = async (uri, dbName) => {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        dbName: dbName
      });
      console.log(`Connected to MongoDB database: ${dbName}`);
    } catch (err) {
      console.error(`Failed to connect to MongoDB: ${err}`);
    }
  };
  
module.exports = connectdb;
