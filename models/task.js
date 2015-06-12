"use strict";

module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    desc: DataTypes.STRING,
    X: DataTypes.STRING,
    Y: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.Project);
        Task.belongsTo(models.User);
        Task.hasMany(models.TaskHistory);
        Task.hasMany(models.Attachment, {
          foreignKey: 'attachmentable_id',
          constraints: false,
          scope: {
            attachmentable: 'task'
          }
        });
        Task.hasMany(models.Comment, {
          foreignKey: 'commentable_id',
          constraints: false,
          scope: {
            commentable: 'task'
          }
        });
      }
    }
  });

  return Task;
};