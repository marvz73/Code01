"use strict";

module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    action: DataTypes.STRING,
    comment: DataTypes.STRING,
    commentable: DataTypes.STRING,
    commentable_id: DataTypes.INTEGER
  }, {
    instanceMethods: {
      getItem: function() {
        return this['get' + this.get('commentable').substr(0, 1).toUpperCase() + this.get('commentable').substr(1)]();
      }
    },
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.User);
        Comment.belongsTo(models.Task, {
          foreignKey: 'commentable_id',
          constraints: false,
          as: 'task'
        });
      }
    }
  });

  return Comment;
};