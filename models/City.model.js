
module.exports = (database, Sequelize) => {
  return database.define("master_city", {
    city: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.INTEGER
    },
    country: {
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
