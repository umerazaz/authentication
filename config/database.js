//Set up mongoose connection
console.log('in db config');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://umer:syedumerazaz03360007378@cluster0.choka.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
.then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));
// const mongoDB = 'mongodb://localhost/node_rest_api';
// mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;
/*const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));*/