const express = require('express');
const path = require('path');
require('dotenv/config');

const app = express();

app.use('/', express.static(path.resolve('public')));
const server = app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
});

module.exports = server;