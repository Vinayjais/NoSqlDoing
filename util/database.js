const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://17vinayjaiswal:SjVj@242910@cluster0.sgzsagw.mongodb.net/?retryWrites=true&w=majority',{
       useUnifiedTopology: true
    }
  )
    .then(client => {
      console.log('Connected!');
      callback(client);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnect;
