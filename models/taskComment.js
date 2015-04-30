"use strict";

module.exports = function(sequelize, DataTypes) {
  var TaskComment = sequelize.define("TaskComment", {
    action: DataTypes.STRING,
    comment: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        TaskComment.belongsTo(models.Task);
        TaskComment.belongsTo(models.User, {as: 'CreatedBy'});
      }
    }
  });

  return TaskComment;
};