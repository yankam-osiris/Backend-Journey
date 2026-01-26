const express = require('express');
const config = require('./config/config');

const app = express();

app.listen(config.port, () => {
    console.log(`-------------------------------------------`);
    console.log(`${config.appName} started!`);
    console.log(`PORT: ${config.port}`);
    console.log(`MODE: ${config.env}`);
    console.log(`-------------------------------------------`);
});