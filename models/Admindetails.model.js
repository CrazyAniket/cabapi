
module.exports = (database, Sequelize) => {
  return database.define("admin_details", {
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    photo: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.TEXT
    },
    city: {
      type: Sequelize.INTEGER
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
