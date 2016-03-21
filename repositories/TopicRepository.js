'use strict';

var db = require('../models/sequelize');
var repo = {};

repo.getTopics = function() {
  return db.Topic.findAll();
};

repo.getTopicById = function(id) {
  return db.Topic.findById(id);
};
module.exports = repo;
