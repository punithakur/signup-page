const express = require('express')
const port = 3005
const app = express()
const router = require('./routers/forms')
var bodyParser = require("body-parser");
var logger = require('morgan')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.use('/from',router)

app.listen(port)
