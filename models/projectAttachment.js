"use strict";

module.exports = function(sequelize, DataTypes) {
  var ProjectAttachment = sequelize.define("ProjectAttachment", {
    originalName: DataTypes.STRING,
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    extension: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        ProjectAttachment.belongsTo(models.Project);
        ProjectAttachment.belongsTo(models.User);
      }
    }
  });

  return ProjectAttachment;
};