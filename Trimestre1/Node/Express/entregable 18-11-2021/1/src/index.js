const express = require('express');
//const app = express();
const server = express();
const loaders = require('./loaders')
const config = require('./config');
const { port } = config;

/* app.listen(port, err => {
    if (err) {
        logger.error(err);
        return;
    }
    console.log(`App listening on port ${port}!`);
}); */

loaders.init(server);
server.listen(port, () => {
  console.log(`Example app listening on ${port}`)
});