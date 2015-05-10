(function() {
  'use strict';
  module.exports = function(sequelize, DataTypes) {
    var User;
    User = sequelize.define("User", {
      name: DataTypes.STRING
    }, {
      classMethods: {
        associate: function(models) {
          return User.hasMany(models.Avatar, {
            foreignKey: "AvatarableId",
            scope: {
              Avatarable: "User"
            }
          });
        }
      },
      hooks: {
        afterCreate: function(user, options, fn) {
          return user.createAvatar({
            url: 'http://domain.com/avatar.png'
          }).then(function(avatar) {
            return fn(null, avatar);
          });
        }
      }
    });
    return User;
  };

}).call(this);
