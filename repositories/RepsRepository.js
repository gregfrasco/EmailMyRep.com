'use strict';

var db = require('../models/sequelize');
var repo = {};
const http = require('https');

repo.getAllReps = function() {
  return db.Rep.findAll();
};

repo.getRepsByAddress = function(address){
  var url = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyC8KEqbkmVof1Np-PTr51xOIhpTKiDIY74&address=' + address;
  http.get(url, function(res){
    var body = '';
    res.on('data', function(chunk){
      body += chunk;
    });
    res.on('end', function(){
      var repsData = JSON.parse(body);
      repsData = repsData.officials;
      var i;
      for (i = 0; i < repsData.length; i++) {
        var newRep = new Object();
        console.log('-----------------------------');
        newRep.name = repsData[i].name;
        newRep.addressLine1 = repsData[i].address[0].line1;
        newRep.addressLine2 = repsData[i].address.line2;
        newRep.city = repsData[i].address.city;
        newRep.state = repsData[i].address.state;
        newRep.zip = repsData[i].address.zip;
        newRep.party = repsData[i].party;
        console.log(newRep);
      }

    });
  }).on('error', function(e){
    console.log("Got an error: ", e);
  });
};

repo.addRep = function(rep){
  return db.Rep.findOne({ where: { name: rep.name } })
  .then(function(rep) {
    if(rep) {
      throw 'rep exists';
    } else {
      rep.save();
    }
  });
};

module.exports = repo;
