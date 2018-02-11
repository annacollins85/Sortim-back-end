'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');
const cors = require('cors');
require('./db');
const corsOptions = {origin:'http://localhost:3000'};
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors(corsOptions))
app.use(router);
app.listen(3001, function () {
    console.log('server running at localhost:3001');
  })
