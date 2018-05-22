const router = require('express').Router();

const Articles = require('../controllers/articles.js');
const Notes = require('../controllers/notes.js');

router.get('/loadFresh', Articles.loadFresh)
router.get('/loadStale', Articles.loadStale)

router.post('/saveArticle', Articles.saveOne)
router.put('/removeSavedArticle', Articles.removeOne)

router.post('/addNote', Notes.addNote)
router.delete('/deleteNote/:id', Notes.removeNote)

router.get('/savedArticles', Articles.loadSaved)
module.exports = router;