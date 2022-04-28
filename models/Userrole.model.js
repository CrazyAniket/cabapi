
module.exports = (database, Sequelize) => {
  return database.define("user_role_master", {  
    rolename: {
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
