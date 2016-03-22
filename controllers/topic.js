"use strict";

var TopicRepo = require('../repositories/TopicRepository.js');
/**
* Get /topic
* Select A Topic
*/
exports.getTopic = function(req, res) {
  if (req.user){
    TopicRepo.getTopics().then(function(topics){
      return res.render('topic.hbs', {
        topics: topics
      });
    });
  } else {
    req.flash('errors',{ msg: 'You must be logged in to do this'});
    return res.redirect('/account');
  }
};

/**
* POST /topic
* Send topic to Templete Page
*/
exports.postTopic = function(req, res) {
  if(req.body.topicID == undefined){
    req.flash('errors',{ msg: 'Please select a topic'});
    return res.redirect('/topic');
  } else {
    return res.redirect('/template?topic=' + req.body.topicID);
  }
};
