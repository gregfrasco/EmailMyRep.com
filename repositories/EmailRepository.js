'use strict';

var db = require('../models/sequelize');
var repo = {};

repo.addEmail = function(emails,message,subject,templateID,user){
  var newEmail = new Object();
  newEmail.subject = subject;
  newEmail.message = message;
  newEmail.templateId = templateID;
  newEmail.userId = user.id;
  var dbEmail = db.Email.build(newEmail);
  return dbEmail.save();
};

repo.getEmails= function(user){
  return db.Email.findAll({ where: { userId: user.id } });
};

module.exports = repo;
