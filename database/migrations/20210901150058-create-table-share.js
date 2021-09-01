'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('shares', { 
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      id_profile:{
        type:Sequelize.INTEGER,
        references: {
          model: 'profiles',
          key: 'id'
        }},
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
      

    });
    
  },

  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.dropTable('shares');
    
  }
};
