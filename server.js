const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/bloodbank', require('./routes/bloodbank'));

app.listen(process.env.PORT || 9000);