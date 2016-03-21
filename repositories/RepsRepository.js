'use strict';

var db = require('../models/sequelize');
var repo = {};

repo.getAllReps = function() {
  return db.Rep.findAll();
};
