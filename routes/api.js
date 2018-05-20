const router = require('express').Router();

const Articles = require('../controllers/articles.js');

router.get('/loadArticles', Articles.init)
router.get('/loadStale', Articles.loadStale)



module.exports = router;