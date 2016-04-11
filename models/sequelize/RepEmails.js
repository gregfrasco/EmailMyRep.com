'use strict';

module.exports = function(db, DataTypes) {
  var RepEmail = db.define('RepEmail', {
    emailID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    RepID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  },{
    tableName: 'RepEmails',
    timestamps: false
  });
  return RepEmail;
};
