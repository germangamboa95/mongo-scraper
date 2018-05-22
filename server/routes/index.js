const express = require('express');
const router = express.Router();

const api = require('./api.js'); 
const views = require('./client.js')

router.use('/api', api ); 
router.use('/', views);


module.exports = router;