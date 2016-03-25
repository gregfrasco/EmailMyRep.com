'use strict';

var db = require('../models/sequelize');
var repo = {};
const http = require('https');

repo.getAllReps = function() {
  return db.Rep.findAll();
};

repo.getAllRepswithEmails = function() {
  return db.Rep.findAll({ where: { email: {
      $ne: null
    }
  }
});
};

repo.getRepsByAddress = function(address){
  var url = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyC8KEqbkmVof1Np-PTr51xOIhpTKiDIY74&address=' + address;
  http.get(url, function(res){
    var body = '';
    res.on('data', function(chunk){
      body += chunk;
    });
    res.on('end', function(){
      var repsData = JSON.parse(body).officials;
      var officeData = JSON.parse(body).offices;
      var i;
      for (i = 0; i < repsData.length; i++) {
        var newRep = new Object();
        newRep.name = repsData[i].name;
        if(repsData[i].address !== undefined){
          newRep.addressLine1 = repsData[i].address[0].line1;
          newRep.addressLine2 = repsData[i].address[0].line2;
          newRep.city = repsData[i].address[0].city;
          newRep.state = repsData[i].address[0].state;
          newRep.zip = repsData[i].address[0].zip;
        }
        newRep.party = repsData[i].party;
        if(repsData[i].phones !== undefined){
          newRep.phone = repsData[i].phones[0];
        }
        if(repsData[i].urls !== undefined){
          newRep.website = repsData[i].urls[0];
        }
        newRep.photoUrl = repsData[i].photoUrl;
        var j;
        for(j = 0; j< repsData[i].channels;j++){
          if(repsData[i].channels[j].type == 'Twitter'){
            newRep.twitter = repsData[i].channels[j].id;
            break;
          }
        }
        if(repsData[i].emails !== undefined){
          newRep.email = repsData[i].emails[0];
        }
        var j;
        for (j = 0; j < officeData.length; j++) {
          var k;
          for (k = 0; k < officeData[j].officialIndices.length; k++) {
             if(officeData[j].officialIndices[k] == i){
               newRep.role = officeData[j].name;
             }
          }
        }
        newRep.title =
        repo.addRep(newRep);
      }
    });
  }).on('error', function(e){
    console.log("Got an error: ", e);
  });
};

repo.addRep = function(rep){
  db.Rep.findOne({ where: { name: rep.name } })
  .then(function(isrep) {
    if(isrep != null) {
      throw 'rep exists';
    } else {
      var dbRep = db.Rep.build(rep);
      return dbRep.save();
    }
  });
};

module.exports = repo;
