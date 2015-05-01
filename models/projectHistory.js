"use strict";

module.exports = function(sequelize, DataTypes) {
  var ProjectHistory = sequelize.define("ProjectHistory", {
    action: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        ProjectHistory.belongsTo(models.Project);
        ProjectHistory.belongsTo(models.User);
      }
    }
  });

  return ProjectHistory;
};