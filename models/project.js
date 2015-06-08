"use strict";

module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Project.belongsTo(models.Account);
        Project.belongsTo(models.User);
        Project.hasMany(models.Project, {as: 'SubProjects'});
        Project.hasMany(models.Task);
        Project.hasOne(models.Attachment, {
          foreignKey: 'attachmentable_id',
          constraints: false
        });
      }
    }
  });

  return Project;
};