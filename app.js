// Deps
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv');
const logger = require('morgan');
const app = express();

// Server Config
env.load(); // Load ENV Vars
app.use(bodyParser.urlencoded({ extended: false })); // Parse Incoming Request Bodies 
app.use(logger('dev')); // Logs All Network Requests
app.use(cors()); // Enable Cors For All Network Request

// Server Setup
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API Server running on PORT ${PORT}`);
});