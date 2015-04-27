"use strict";

module.exports = function(sequelize, DataTypes) {
  var AccountUser = sequelize.define("AccountUser", {
    role: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        AccountUser.belongsTo(models.Account);
        AccountUser.belongsTo(models.User);
      }
    }
  });

  return AccountUser;
};