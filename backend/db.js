const mongoose = require('mongoose')
require('dotenv').config();

//const CONNECTION_URL = 'mongodb+srv://Mustakim:Mustakim123@clustermemories1.7mbce19.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false);
const connectToMongo=()=>{
    mongoose.connect(process.env.REACT_APP_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conncted to Mongo Successfully "))
  .catch((error) => console.log(`${error} did not connect`));
}

module.exports = connectToMongo;
