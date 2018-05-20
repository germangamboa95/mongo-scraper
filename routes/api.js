const router = require('express').Router();

const Articles = require('../controllers/articles.js');

router.get('/loadArticles', Articles.test)




module.exports = router;