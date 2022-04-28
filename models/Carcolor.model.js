
module.exports = (database, Sequelize) => {
  return database.define("car_color", {
    colorname: {
      type: Sequelize.STRING
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
