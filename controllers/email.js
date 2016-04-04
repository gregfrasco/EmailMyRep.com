"use strict";

var TemplateRepo = require('../repositories/TemplateRepository.js');
var TopicRepo = require('../repositories/TopicRepository.js');
var RepRepo = require('../repositories/RepsRepository.js');
var emailService = require('../services/emailService.js');
/**
* Get /email
* Write an email
*/
exports.getEmail = function(req, res) {
  if (req.user){
    var templateID = req.query.template;
    //Get template
    TemplateRepo.getTemplatesById(templateID).then(function(template){
      template = template.dataValues;
      //Get Topic
      TopicRepo.getTopicById(template.TopicId).then(function(topics){
        topics = topics.dataValues;
        //Get Reps with Emails
        var reps = RepRepo.getAllReps();
          //Get Reps without Emails
          return res.render('email.hbs', {
            template: template,
            topic: topics,
            reps: reps,
            otherReps: reps
          });
      });
    });
  } else {
    req.flash('errors',{ msg: 'You must be logged in to do this'});
    return res.redirect('/account');
  }
};

/**
* POST /email
* Send email through server
*/
exports.postEmail = function(req, res) {
  var errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/email');
  }
  console.log(req.body);
  emailService.sendEmailtoRep(req.user.email, "frascog@wit.edu", req.body.subject, req.body.message, function(err) {
  });
  /*
  if(req.body.g-recaptcha-response){
    req.flash('errors', 'ARE YOU HUMAN');
    return res.redirect('/email');
  } else {

  }
  */
  return res.redirect('/');
};
