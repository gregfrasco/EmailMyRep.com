'use strict';

module.exports = function(db, DataTypes) {
  var RepEmail = db.define('RepEmail', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  },{
    tableName: 'RepEmails',
    timestamps: true
  });
  return RepEmail;
};
