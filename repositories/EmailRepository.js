'use strict';

var db = require('../models/sequelize');
var repo = {};

repo.addEmail = function(emails,message,subject,templateID,userID){
    var emailDB = db.Email.build({subject:subject,message:message,templateID:templateID,userID:userID});
    emailDB.save();
};

module.exports = repo;
