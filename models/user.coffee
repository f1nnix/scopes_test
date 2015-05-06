'use strict'

module.exports = (sequelize, DataTypes) ->
  User = sequelize.define "User",
    name: DataTypes.STRING
  ,
    classMethods:
      associate: (models) ->
        # associations can be defined here

  User
