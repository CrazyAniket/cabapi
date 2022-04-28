
module.exports = (database, Sequelize) => {
  return database.define("car_details", {
    driverid: {
      type: Sequelize.INTEGER
    },
    manufactureid: {
      type: Sequelize.INTEGER
    },
    colorid: {
      type: Sequelize.INTEGER
    },
    capacityid: {
      type: Sequelize.INTEGER
    },
    modelid: {
      type: Sequelize.INTEGER
    },
    typeid: {
      type: Sequelize.INTEGER
    },
    year: {
      type: Sequelize.STRING
    },
    vehicle_no: {
      type: Sequelize.STRING
    },
    chassis_no: {
      type: Sequelize.STRING
    },
    insurance_no: {
      type: Sequelize.STRING
    },
    insurance_expire_date: {
      type: Sequelize.DATE
    },
    tax_no: {
      type: Sequelize.STRING
    },
    tax_expire_date: {
      type: Sequelize.DATE
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
    vin_no: {
      type: Sequelize.STRING
    },
    frame_no: {
      type: Sequelize.STRING
    },
    edc_no: {
      type: Sequelize.STRING
    },
    province: {
      type: Sequelize.STRING
    },
    act_no: {
      type: Sequelize.STRING
    },
    act_expire_date: {
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
