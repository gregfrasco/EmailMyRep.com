"use strict";

var TemplateRepo = require('../repositories/TemplateRepository.js');
var TopicRepo = require('../repositories/TopicRepository.js');
var RepRepo = require('../repositories/RepsRepository.js');
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
        //Get Reps
        RepRepo.getAllReps().then(function(reps){
          //Render Email
          console.log(reps);
          return res.render('email.hbs', {
            template: template,
            topic: topics,
            reps: reps
          });
        });

      });
    });
  }else {
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
  return res.redirect('/email');
};
