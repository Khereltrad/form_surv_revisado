
const { Router } = require('express');
const { Mensaje } = require('../db');
const router = Router();

router
  .get('/', async (req, res) => { res.render('index.ejs'); })
  .get('/result', async (req, res) => { res.render('results.ejs'); });

router
  .get('/test', async (req, res) => {
      const fichas = await Mensaje.findAll();
      res.render('results.ejs',{fichas: fichas}); })
  
  .post('/test', async (req, res) => {
    console.log(req.body);
    const new_ficha = await Mensaje.create(req.body);
    res.redirect('/');
  });

module.exports = router;