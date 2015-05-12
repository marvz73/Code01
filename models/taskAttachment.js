"use strict";

module.exports = function(sequelize, DataTypes) {
  var TaskAttachment = sequelize.define("TaskAttachment", {
    originalName: DataTypes.STRING,
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    extension: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        TaskAttachment.belongsTo(models.Task);
        TaskAttachment.belongsTo(models.User);
      }
    }
  });

  return TaskAttachment;
};