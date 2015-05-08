"use strict";

module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    action: DataTypes.STRING,
    desc: DataTypes.STRING,
    status: DataTypes.STRING,
    X: DataTypes.STRING,
    Y: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.Project);
        Task.belongsTo(models.User);
        Task.hasMany(models.TaskComment);
        Task.hasMany(models.TaskHistory);
      }
    }
  });

  return Task;
};