"use strict";

/**
 * Get /email
 * Write an email
 */
exports.getEmail = function(req, res) {
  if (req.user){
    return res.render('email.hbs', {
      title: 'Emails'
    });
  }
  req.flash('errors',{ msg: 'You must be logged in to do this'});
  return res.redirect('/account');
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
