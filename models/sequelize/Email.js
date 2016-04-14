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
        },
        templateId: {
          type: DataTypes.INTEGER
        },
        userId: {
          type: DataTypes.INTEGER
        },
        reps: {
          type: DataTypes.JSON
        }
    }, {
        tableName: 'Emails',
        timestamps: true
    });
    return Email;
};
