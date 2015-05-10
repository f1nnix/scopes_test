(function() {
  'use strict';
  module.exports = function(sequelize, DataTypes) {
    var Avatar;
    Avatar = sequelize.define('Avatar', {
      url: DataTypes.STRING
    }, {
      classMethods: {
        associate: function(models) {
          return Avatar.belongsTo(models.User, {
            foreignKey: 'AvatarableId',
            as: 'Avatarable',
            scope: {
              Avatarable: "User"
            }
          });
        }
      }
    });
    return Avatar;
  };

}).call(this);
