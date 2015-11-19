'use strict'

var _ = require('lodash');
var userConfig = require('../../userConfig');

module.exports = {
  port: 5000,
  ip: '127.0.0.1',
  db: {
    server: userConfig.server || 'MSSQL',
    user: userConfig.user || 'sa',
    password: userConfig.password || 'pass',
    options: _.assign({}, { encrypt: true }, userConfig.options)
  },
  secrets: {
    session: 'sssshhharedSecret'
  }
};