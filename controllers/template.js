"use strict";

var TemplateRepo = require('../repositories/TemplateRepository.js');
/**
 * Get /template
 * Select A Template
 */
exports.getTemplate = function(req, res) {
  if (req.user){
    var topicID = req.query.topic;
    TemplateRepo.getTemplates(topicID).then(function(templates){
      return res.render('template.hbs', {
        templates: templates
      });
    });
  } else {
  req.flash('errors',{ msg: 'You must be logged in to do this'});
  return res.redirect('/account');
}
};

/**
 * POST /template
 * Send template to Template Page (until next page is configured)
 */
exports.postTemplate = function(req, res) {
  var errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/template');
  }
  return res.redirect('/email');
};
