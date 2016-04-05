'use strict';

module.exports = function(db, DataTypes) {
    var Email = db.define('Email', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.STRING(10000),
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
