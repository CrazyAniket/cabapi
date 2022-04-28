
module.exports = (database, Sequelize) => {
  return database.define("master_documents", {
    document_name: {
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
