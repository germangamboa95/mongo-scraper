const express = require('express'); 
const bodyParser = require('body-parser'); 
const morgan = require('morgan'); 
const mongoose = require('mongoose');
const routes = require('./routes/index');
const cors = require('cors')
const serveStatic = require('serve-static');
//  Init express 
const app = express(); 
app.use(cors());
// Body parser
app.use(bodyParser.json());

// Init Morgan
app.use(morgan("dev"));
app.use(routes);
// Init mongoose 
const connectUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/test'
mongoose.connect(connectUrl);
mongoose.Promise = Promise;  
app.use('/',serveStatic(__dirname + "/dist"));

//  Init Server
const PORT = process.env.PORT || 3001; 
app.listen(PORT, err => {
    if(err) throw err; 
    console.log('Server is running on port:', PORT);
});
