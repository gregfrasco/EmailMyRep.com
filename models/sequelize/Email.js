'use strict';

module.exports = function(db, DataTypes) {
    var Email = db.define('Email', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'Emails',
        timestamps: true,
        classMethods: {
          associate: function(models) {
            Email.hasMany(models.RepEmail);
          }
        }
    });
    return Email;
};
