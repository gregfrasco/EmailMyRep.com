"use strict";

/**
 * Get /template
 * Select A Template
 */
exports.getTemplate = function(req, res) {
  if (req.user){
    return res.render('template.hbs', {
      title: 'Templates'
    });
  }
  req.flash('errors',{ msg: 'You must be logged in to do this'});
  return res.redirect('/account');
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
