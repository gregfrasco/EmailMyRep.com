'use strict';

module.exports = function(db, DataTypes) {
    var Rep = db.define('Rep', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        addressLine1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        addressLine2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: true
        },
        party: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true
        },
        photoUrl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        twitter: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email:{
          type: DataTypes.STRING,
          allowNull: true
        },
        role:{
          type: DataTypes.STRING,
          allowNull: true
        }
    }, {
        tableName: 'Reps',
        timestamps: false
    });
    return Rep;
};
