const express = require('express');

const { logger } = require('./utils');
const { port } = require('./config');
const loaders = require('./loaders');

const server = express();

loaders.init(server);

server.listen(port, () => {
  logger.info(`Example app listening on ${port}`)
});