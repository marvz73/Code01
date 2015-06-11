"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      middleName: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      token: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      verified: {
        type: DataTypes.STRING
      },
      plan: {
        type: DataTypes.STRING,
        defaultValue: 'free',
        allowNull: false
      }
    }, {
      classMethods: {
        associate: function(models) {
          User.belongsToMany(models.Account, {through: models.AccountUser});
          User.hasMany(models.AccountUser);
        }
      }
    });

  return User;
};