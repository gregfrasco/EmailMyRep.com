"use strict";

var TemplateRepo = require('../repositories/TemplateRepository.js');
var TopicRepo = require('../repositories/TopicRepository.js');
var EmailRepo = require('../repositories/EmailRepository.js');
var RepRepo = require('../repositories/RepsRepository.js');
var emailService = require('../services/emailService.js');
var templateID = 0;
var reCAPTCHA = require('recaptcha2');
/**
* Get /email
* Write an email
*/
exports.getEmail = function(req, res) {
  if (req.user){
    templateID = req.query.template;
    //Get template
    TemplateRepo.getTemplatesById(templateID).then(function(template){
      template = template.dataValues;
      //Get Topic
      TopicRepo.getTopicById(template.TopicId).then(function(topics){
        topics = topics.dataValues;
        //Get Reps with Emails
        var reps = RepRepo.getAllReps();
          //Get Reps without Emails
          var i = 0;
          for(i = 0; i < reps.length; i++){
            RepRepo.addRep(reps[i]);
          }
          EmailRepo.setReps(reps);
          return res.render('email.hbs', {
            template: template.template,
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
  var recaptcha=new reCAPTCHA({
    siteKey:'6LehCRwTAAAAAA1BuVP_g8AXHu1TEPX9iSRT6ae2',
    secretKey:'6LehCRwTAAAAANnAeU_Z78Xi1GsfwhzPdIINYBYh'
  });
  recaptcha.validateRequest(req)
  .then(function(){})
  .catch(function(errorCodes){
    req.flash('errors',{ msg: recaptcha.translateErrors(errorCodes)});
    return res.redirect('/email');
  });
  var allEmails = [];
  if(req.body.emails == undefined){
    allEmails = [req.user.email];
  }else{
    allEmails.push(req.body.emails);
    allEmails.push(req.user.email);
  }
  var i = 0;
  for(i = 0; i < allEmails.length; i++){
    emailService.sendEmailtoRep(req.user.email, allEmails[i], req.body.subject, req.body.message, function(err) {
  });
}
EmailRepo.addEmail(allEmails,req.body.message,req.body.subject,templateID,req.user);

  /*
  if(req.body.g-recaptcha-response){
    req.flash('errors', 'ARE YOU HUMAN');
    return res.redirect('/email');
  } else {

  }
  */
  return res.redirect('/');
};
