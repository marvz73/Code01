"use strict";

module.exports = function(sequelize, DataTypes) {
  var Attachment = sequelize.define("Attachment", {
    originalName: DataTypes.STRING,
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    extension: DataTypes.STRING,
    attachmentable: DataTypes.STRING,
    attachmentable_id: DataTypes.INTEGER
  }, {
    instanceMethods: {
      getItem: function() {
        return this['get' + this.get('attachmentable').substr(0, 1).toUpperCase() + this.get('attachmentable').substr(1)]();
      }
    },
    classMethods: {
      associate: function(models) {
        Attachment.belongsTo(models.User);
        Attachment.belongsTo(models.Project, {
          foreignKey: 'attachmentable_id',
          constraints: false,
          as: 'project'
        });
        Attachment.belongsTo(models.Task, {
          foreignKey: 'attachmentable_id',
          constraints: false,
          as: 'task'
        });
      }
    },
  });

  return Attachment;
};