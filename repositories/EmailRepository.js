'use strict';

var db = require('../models/sequelize');
var repo = {};
var RepRepo = require('../repositories/RepsRepository.js');

repo.addEmail = function(emails,message,subject,templateID,user){
  //Save Email
  var newEmail = new Object();
  newEmail.subject = subject;
  newEmail.message = message;
  newEmail.templateId = templateID;
  newEmail.userId = user.id;
  var dbEmail = db.Email.build(newEmail);
  return dbEmail.save();
};

repo.addReps = function(emails,message,subject,templateID,user){
  db.Email.findAll({ where: {subject: subject,message: message,templateId:templateID,userId: user.id},order: [
    // Will escape username and validate DESC against a list of valid direction parameters
    ['id', 'ASC']]})
    .then(function(Email) {
      var yourEmail = Email.pop().dataValues;
      var i = 0;
      for(i = 0; i < emails.length - 1;i++){
      RepRepo.getRepByEmail(emails[i]).then(function(rep){
        console.log(rep);
      });
      }
    });
};

repo.getEmails= function(user){
  return db.Email.findAll({ where: { userId: user.id } });
};

module.exports = repo;
