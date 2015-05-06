'use strict'

module.exports = (sequelize, DataTypes) ->
  Bot = sequelize.define "Bot",
    name: DataTypes.STRING
  ,
    classMethods:
      associate: (models) ->
        Bot.hasOne models.Avatar,
          foreignKey: 'AvatarableId'
          scope: Avatarable: 'Bot'
    hooks:
      afterCreate: (bot, options, fn) ->
        bot.createAvatar(url: 'http://domain.com/avatar.png').then (avatar) ->
          fn null, avatar

  Bot
