const { Router } = require('express');
const router = Router();

router
  .get('/', async (req, res) => { res.render('index.ejs'); })
  // .get('/result', async (req, res) => { res.render('results.ejs'); });

    
module.exports = router;