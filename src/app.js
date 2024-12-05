const express = require("express");
const helmet = require("helmet");

const app = express();

// Set security HTTP headers
app.use(helmet());

// Body parser, reads data into req.body
app.use(express.json());

// Serve static files
app.use(express.static(`${__dirname}/../public`));

module.exports = app;
