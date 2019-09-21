const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/dbConfig.js');
const mongoose = require('mongoose');
const routes = require('./routes/userRoute');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Successfully connected to the Database.....`);
}).catch((err) => {
    console.log(`Not connected to Database...${err}`);
    process.exit();
})
app.get('/', (req, res) => {
    res.json(`message : Welcome to FundooNotes application.`);
});
app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
})
