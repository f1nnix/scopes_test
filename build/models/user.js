(function() {
  'use strict';
  module.exports = function(sequelize, DataTypes) {
    var User;
    User = sequelize.define("User", {
      name: DataTypes.STRING
    }, {
      classMethods: {
        associate: function(models) {}
      }
    });
    return User;
  };

}).call(this);
