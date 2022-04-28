
module.exports = (database, Sequelize) => {
  return database.define("assignhr", {
    hrid: {
      type: Sequelize.INTEGER
    },
    driverid: {
      type: Sequelize.INTEGER
    },    
    active: {
      type: Sequelize.BOOLEAN
    },
    delete_flag: {
      type: Sequelize.BOOLEAN
    },
    created_by: {
      type: Sequelize.STRING
    },
    updated_by: {
      type: Sequelize.STRING
    }
  });
};
