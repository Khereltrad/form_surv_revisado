const { Router } = require('express');
const { Mensaje } = require('../db');
const router = Router();

router
  .get('/', async (req, res) => { res.render('index.ejs'); })
  // .get('/result', async (req, res) => { res.render('results.ejs'); });

router
  .get('/test', async (req, res) => { const fichas = await Mensaje.findAll(); res.render("results.ejs",{fichas: fichas}); })
  .post('/test', async (req, res) => { const new_ficha = await Mensaje.create(req.body); res.redirect('/'); });

router
.get('/result', async (req,res) => { 
  const fichas  = await Mensaje.findAll();
  res.render('results.ejs',{ fichas: fichas }); })

  .post('/result', async (req,res) =>{
    const fichas  = await Mensaje.findAll();
    console.log(fichas);
    res.render('results.ejs', { fichas: fichas });
  });      

module.exports = router;