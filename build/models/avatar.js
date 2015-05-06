(function() {
  'use strict';
  module.exports = function(sequelize, DataTypes) {
    var Avatar;
    Avatar = sequelize.define('Avatar', {
      url: DataTypes.STRING
    }, {
      classMethods: {
        associate: function(models) {
          Avatar.belongsTo(models.Bot, {
            foreignKey: 'AvatarableId',
            as: 'Avatarable'
          });
        }
      }
    });
    return Avatar;
  };

}).call(this);
