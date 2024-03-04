'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      organizerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key:'id',
        },
        onDelete: "CASCADE",
      },
      name: {
        type: Sequelize.STRING(60),
        allowNull:false
      },
      about: {
        type: Sequelize.TEXT,
        allowNull:false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      private: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      // previewImage: {
      //   type: Sequelize.STRING
      // },
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = 'Groups';
    return queryInterface.dropTable(options);
  }
};
