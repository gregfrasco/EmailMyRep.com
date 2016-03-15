'use strict';

module.exports = function(db, DataTypes) {
  var Template = db.define('Template', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    template: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    tableName: 'Templates',
    timestamps: true,
    classMethods: {
      associate: function(models) {
        Template.hasMany(models.Email);
      }
    }
  });
  return Template;
};
