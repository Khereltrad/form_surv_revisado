const express = require("express");
const app = express();
const port = 8000;

app
.use( express.json() )
.use( express.urlencoded({ extended: true }) )
// .get("/",(req,res) =>    {res.json({message: "Hola ^^"});    })
.use(express.static(__dirname+"/public"))
.use(require('./routes/routes'))   
.set('views', __dirname + '/views')
.set('view engine', 'ejs');


app.listen( port, () => console.log(`Listening on port: ${port}`) );