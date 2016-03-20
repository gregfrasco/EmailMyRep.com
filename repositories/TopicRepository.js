'use strict';

var db = require('../models/sequelize');
var repo = {};

repo.getTopics = function() {
  return db.Topic.findAll();
};

module.exports = repo;
