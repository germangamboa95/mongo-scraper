const express = require('express'); 
const bodyParser = require('body-parser'); 
const morgan = require('morgan'); 
const mongoose = require('mongoose');
const routes = require('./routes/index')
//  Init express 
const app = express(); 

// Body parser
app.use(bodyParser.json());

// Init Morgan
app.use(morgan("dev"));
app.use(routes);
// Init mongoose 
mongoose.connect("mongodb://localhost:27017/testicle");
mongoose.Promise = Promise;  


//  Init Server
const PORT = process.env.PORT || 3001; 
app.listen(PORT, err => {
    if(err) throw err; 
    console.log('Server is running on port:', PORT);
});