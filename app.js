// Deps
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

// Server Setup
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false })); // body parser
app.use(logger('dev')) // morgan
app.use(cors()) //cors

app.listen(PORT, () => {
    console.log(`API Server running on ${PORT}`);
})