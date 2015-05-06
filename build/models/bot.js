(function() {
  'use strict';
  module.exports = function(sequelize, DataTypes) {
    var Bot;
    Bot = sequelize.define("Bot", {
      name: DataTypes.STRING
    }, {
      classMethods: {
        associate: function(models) {
          return Bot.hasOne(models.Avatar, {
            foreignKey: 'AvatarableId',
            scope: {
              Avatarable: 'Bot'
            }
          });
        }
      },
      hooks: {
        afterCreate: function(bot, options, fn) {
          return bot.createAvatar({
            url: 'http://domain.com/avatar.png'
          }).then(function(avatar) {
            return fn(null, avatar);
          });
        }
      }
    });
    return Bot;
  };

}).call(this);
