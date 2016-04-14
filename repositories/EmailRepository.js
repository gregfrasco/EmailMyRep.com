'use strict';

var db = require('../models/sequelize');
var repo = {};
var RepRepo = require('../repositories/RepsRepository.js');
var reps = [];

repo.setReps = function(newReps){
  reps = newReps;
};

repo.addEmail = function(emails,message,subject,templateID,user){
  //Save Email
  var repEmails;
  if(emails[0] instanceof Array){
    repEmails = emails[0];
  } else {
    repEmails = emails;
    repEmails.pop();
  }
  var newReps = [];
  var i = 0;
  for(i = 0; i < reps.length; i++){
    if(reps[i].email){
      var j = 0;
      for(j = 0; j < repEmails.length; j++){
        if(repEmails[j] == reps[i].email){
          newReps.push(reps[i]);
        }
      }
    }
  }
  //Rep names
  var repNames = '';
  for(i = 0; i < newReps.length; i++){
    repNames = repNames + newReps[i].name + ", ";
  }
  var newEmail = new Object();
  newEmail.subject = subject;
  newEmail.message = message;
  newEmail.templateId = templateID;
  newEmail.userId = user.id;
  newEmail.reps = repNames;
  var dbEmail = db.Email.build(newEmail);
  return dbEmail.save();
};

repo.getEmails= function(user){
  return db.Email.findAll({ where: { userId: user.id } });
};

var contains = function(needle) {
  // Per spec, the way to identify NaN is that it is not equal to itself
  var findNaN = needle !== needle;
  var indexOf;

  if(!findNaN && typeof Array.prototype.indexOf === 'function') {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function(needle) {
      var i = -1, index = -1;

      for(i = 0; i < this.length; i++) {
        var item = this[i];

        if((findNaN && item !== item) || item === needle) {
          index = i;
          break;
        }
      }

      return index;
    };
  }

  return indexOf.call(this, needle) > -1;
};

module.exports = repo;
