"use strict";

/**
 * Get /topic
 * Select A Topic
 */
exports.getTopic = function(req, res) {
  if (req.user){
    return res.render('topic.hbs', {
      title: 'Topics'
    });
  }
  req.flash('errors',{ msg: 'You must be logged in to do this'});
  return res.redirect('/account');
};

/**
 * POST /topic
 * Send topic to Templete Page
 */
exports.postTopic = function(req, res) {
  var errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/topic');
  }
  return res.redirect('/template');
};
