const express = require('express');
const router  = express.Router();

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET projets page */
router.get('/projets', (req, res, next) => {
  res.render('projets');
});

/* GET credits page */
router.get('/credits', (req, res, next) => {
  res.render('credits');
});

module.exports = router;