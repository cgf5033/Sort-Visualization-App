const express = require('express');
const morgan = require('morgan');
const { saveAlgo, getAlgo, updateAlgo } = require('./db');

const app = express();

// from DB

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {

})

app.post('/', (req, res) => {
  const data = req.body;

})

app.listen(3000);