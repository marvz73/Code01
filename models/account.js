"use strict";

module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define("Account", {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // Account.belongsToMany(models.User, {through: models.AccountUser});
        Account.hasMany(models.Project);
        Account.hasMany(models.AccountUser);
      }
    }
  });

  return Account;
};