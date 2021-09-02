'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('posts', { 
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      profile_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'profiles',
          key: 'id'
        }},
      post:{
        type:Sequelize.STRING,
        allowNull:false
        },
        
      likes:Sequelize.INTEGER,
      num_comments:Sequelize.INTEGER,
      share:Sequelize.INTEGER,
      
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }})
    
  },

  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.dropTable('posts');
    
  }
};