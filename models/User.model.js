
module.exports = (database, Sequelize) => {
  return database.define("user_login_master", {
    userid: {
      type: Sequelize.INTEGER
    },
    roleid: {
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    passtxt: {
      type: Sequelize.STRING
    },
    passchangedate: {
      type: Sequelize.DATE
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
