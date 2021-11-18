const express = require('express');

const routes = require('../routes');

module.exports = (server) => {
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }))
  server.use(routes);
  server.use((req, res) => res.status(404).send({ message: 'Not Found' }));
};