'use strict';

module.exports = function(db, DataTypes) {
  var Topic = db.define('Topic', {
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
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'Topics',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Topic.hasMany(models.Template);
      }
    }
  });
  return Topic;
};
