(function() {
  'use strict';
  module.exports = {
    up: function(queryInterface, Sequelize) {
      return queryInterface.createTable('Avatars', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        url: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        Avatarable: {
          type: Sequelize.STRING
        },
        AvatarableId: {
          type: Sequelize.INTEGER
        }
      });
    },
    down: function(queryInterface, Sequelize) {
      return queryInterface.dropTable('Avatars');
    }
  };

}).call(this);
