'use strict'

module.exports = (sequelize, DataTypes) ->
  Avatar = sequelize.define('Avatar', { url: DataTypes.STRING }, classMethods: associate: (models) ->
    Avatar.belongsTo models.Bot,
      foreignKey: 'AvatarableId'
      as: 'Avatarable'
    return
  )
  Avatar
