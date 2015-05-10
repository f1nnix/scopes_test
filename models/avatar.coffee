'use strict'

module.exports = (sequelize, DataTypes) ->
  Avatar = sequelize.define('Avatar', {
    url: DataTypes.STRING
  }, classMethods: associate: (models) ->

    Avatar.belongsTo models.User,
      foreignKey: 'AvatarableId'
      as: 'Avatarable'
      scope:
        Avatarable: "User"
  )
  Avatar
