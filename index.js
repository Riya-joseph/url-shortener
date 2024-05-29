var express = require('express');
var router = require('./src/routes/index');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

require('dotenv').config();

var app = express();

const connectDB = () => {
    return mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, { useNewUrlParser: true });
};

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use('/', router);
app.use(bodyParser.json({ limit: '50mb' }));

connectDB();

mongoose.connection.on('connected', function () {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, function () {
        console.log('Example app listening on port 3000!');
    });
});

