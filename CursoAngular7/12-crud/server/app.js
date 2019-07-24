const express = require('express');
const bodyparse = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const department_controller = require('./department_controller');
const product_controller = require('./product_controller');

app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended: true}));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/http_app', {useNewUrlParser: true});

app.use('/departments', department_controller);
app.use('/products', product_controller);

app.listen(3000);
