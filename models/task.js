"use strict";

module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    action: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.Project);
        Task.belongsTo(models.User, {as: 'CreatedBy'});
        Task.hasMany(models.TaskComment);
        Task.hasMany(models.TaskHistory);
      }
    }
  });

  return Task;
};