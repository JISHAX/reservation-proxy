
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/restaurants/:restaurantId', express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => console.log(` listening to port ${PORT}`));