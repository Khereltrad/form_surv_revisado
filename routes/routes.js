
const { Router } = require('express');
const { Mensaje } = require('../db');
// const flash = require('connect-flash');
const router = Router();

router
  .get('/', async (req, res) => { res.render('index.ejs'); });
  // .get('/login',checkLogin,async(req,res)=>{res.render('login.ejs');})
  // .get('/admin',[checkLogin,checkAdmin],async(req,res)=>{res.render('admin.ejs');})
  // .use(flash());

module.exports = router;