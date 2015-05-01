"use strict";

module.exports = function(sequelize, DataTypes) {
  var TaskHistory = sequelize.define("TaskHistory", {
    action: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        TaskHistory.belongsTo(models.Task);
        TaskHistory.belongsTo(models.User);
      }
    }
  });

  return TaskHistory;
};