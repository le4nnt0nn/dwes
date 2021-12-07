const express = require('express');
const server = express();
const loaders = require('./loaders')
const config = require('./config');
const { logger } = require('./utils');
require('dotenv').config({path: '../.env'});
const { port } = config;

loaders.init(server);
server.listen(port, () => {
  logger.info(`Example app listening on ${port}`)
});