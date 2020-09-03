const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./src/routes')(app);
app.get('*', (req, res) => res.status(404).send('Not found'));

module.exports = app;
