"use strict";

module.exports = function(sequelize, DataTypes) {
  var History = sequelize.define("History", {
    action: DataTypes.STRING,
    historyable: DataTypes.STRING,
    historyable_id: DataTypes.INTEGER
  }, {
    instanceMethods: {
      getItem: function() {
        return this['get' + this.get('historyable').substr(0, 1).toUpperCase() + this.get('historyable').substr(1)]();
      }
    },
    classMethods: {
      associate: function(models) {
        History.belongsTo(models.User);
      }
    }
  });

  return History;
};