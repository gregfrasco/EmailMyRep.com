'use strict';

var db = require('../models/sequelize');
var repo = {};

repo.getTemplates = function(id) {
  return db.Template.findAll({ where: { TopicId: id } });
};

repo.getTemplatesById = function(id) {
  return db.Template.findById(id);
};

module.exports = repo;
