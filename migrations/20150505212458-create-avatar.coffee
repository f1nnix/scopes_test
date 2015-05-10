'use strict'
module.exports =
  up: (queryInterface, Sequelize) ->
    queryInterface.createTable 'Avatars',
      id:
        allowNull    : false
        autoIncrement: true
        primaryKey   : true
        type         : Sequelize.INTEGER
      url:
        type: Sequelize.STRING
      createdAt:
        allowNull: false
        type     : Sequelize.DATE
      updatedAt:
        allowNull: false
        type     : Sequelize.DATE
      Avatarable:
        type: Sequelize.STRING
      AvatarableId:
        type: Sequelize.INTEGER
  down: (queryInterface, Sequelize) ->
    queryInterface.dropTable 'Avatars'
