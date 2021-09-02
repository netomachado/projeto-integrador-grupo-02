'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('photos', { 
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      profile_id:{
        type:Sequelize.INTEGER,
        references: {
          model: 'profiles',
          key: 'id'
        }},
        photo_path:{
          type:Sequelize.STRING,
          allowNull:false
      },
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
      

    })
    
  },

  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.dropTable('photos');
    
  }
};
