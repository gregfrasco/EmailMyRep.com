"use strict";

var TopicRepo = require('../repositories/TopicRepository.js');
/**
 * Get /topic
 * Select A Topic
 */
exports.getTopic = function(req, res) {
  if (req.user){
    var topics = TopicRepo.getTopics();
      console.log('topics');
      topics.forEach(function (topic){
        console.log(topic.title);
      });
      return res.render('topic.hbs', {
        allTopics: topics
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
