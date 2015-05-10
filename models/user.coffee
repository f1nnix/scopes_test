'use strict'

module.exports = (sequelize, DataTypes) ->
  User = sequelize.define "User",
    name: DataTypes.STRING
  ,
    classMethods:
      associate: (models) ->
        User.hasMany models.Avatar,
          # as: "Avatar"
          foreignKey: "AvatarableId"
          scope:
            Avatarable: "User"
    hooks:
      afterCreate: (user, options, fn) ->
        user.createAvatar
          url: 'http://domain.com/avatar.png'
        .then (avatar) ->
          fn null, avatar

  User
