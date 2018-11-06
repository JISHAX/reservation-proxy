
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/restaurants/restaurantId', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

app.listen(PORT, () => console.log(` listening to port ${PORT}`));