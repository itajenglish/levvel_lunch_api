// Deps
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotEnv = require('dot-env');
const logger = require('morgan');

// Server Config
dotEnv.load(); // Load ENV Vars
app.use(bodyParser.urlencoded({ extended: false })); // Parse Incoming Request Bodies 
app.use(logger('dev')); // Logs All Network Requests
app.use(cors()); // Enable Cors For All Network Request

// Server Setup
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API Server running on ${PORT}`);
});