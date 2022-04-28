const db = require("../models");
const cardetailsObj = db.cardetails;
const Op = db.Sequelize.Op;

// Create and save new
exports.create = (request, result) => {
  if (!request.body.driverid) {
    result.status(400).send({
      message: "driverid cannot be empty"
    });
  }

  // Create a object
  const cardetails = {
    driverid: request.body.driverid,
    manufactureid: request.body.manufactureid,
    colorid: request.body.colorid,
    capacityid: request.body.capacityid,
    modelid: request.body.modelid,
    typeid: request.body.typeid,
    year: request.body.year,
    vehicle_no: request.body.vehicle_no,
    chassis_no: request.body.chassis_no,
    insurance_no: request.body.insurance_no,
    insurance_expire_date: request.body.insurance_expire_date,
    tax_no: request.body.tax_no,
    tax_expire_date: request.body.tax_expire_date,
    city: request.body.city,
    state: request.body.state,
    country: request.body.country,
    vin_no: request.body.vin_no,
    frame_no: request.body.frame_no,
    edc_no: request.body.edc_no,
    province: request.body.province,
    act_no: request.body.act_no,
    act_expire_date: request.body.act_expire_date,    
    active: request.body.active ? request.body.active : 0,
    delete_flag: request.body.delete_flag ? request.body.delete_flag : 0,
    created_by: request.body.created_by ? request.body.created_by : '', 
    updated_by: request.body.updated_by ? request.body.updated_by : '',
  };

  // Save object to db
  cardetailsObj.create(cardetails).then(data => {
    result.send(data);
  }).catch(err => {
    result.status(500).send({
      message: err.message || "Some error occurred while saving."
    });
  });
};

// Retrieve all (Receive data with condition).
exports.getAll = (request, result) => {
  cardetailsObj.findAll()
    .then(data => {
      result.send(data);
    }).catch(err => {
      result.status(500).send({
        message: err.message || "Some error occurred while retrieving data."
      });
    });
};

// Get object by ID
exports.getByID = (request, result) => {
  const paramID = request.params.id;
  cardetailsObj.findAll({
    where: { id: paramID }
  }).then(data => {
    result.send(data);
  }).catch(err => {
    result.status(500).send({
      message: err.message || `Some error occurred while retrieving data with id : ${paramID}`
    });
  });
};
// Update a object by the id
exports.updateByID = (request, result) => {
  const paramID = request.params.id;
  console.log(paramID);
  console.log(request.body);
  cardetailsObj.update(request.body, {
    where: { id: paramID }
  }).then(num => {
    console.log(num[0]);
    if (num[0] === 1) {
      result.send({
        message: "cardetails object successfully updated."
      });
    } else {
      result.send({
        message: `Cannot update cardetails object with id=${paramID}!`
      });
    }
  }).catch(err => {
    result.status(500).send({
      message: err.message || `Error while updating cardetails object with id=${paramID}!`
    });
  });
};

// Delete object by ID
exports.deleteByID = (request, result) => {
  const id = request.params.id;
  cardetailsObj.destroy({
    where: { id: id }
  }).then(num => {
    if (num === 1) {
      result.send({
        message: "cardetails object successfully deleted."
      });
    } else {
      result.send({
        message: `Cannot delete cardetails object with id=${id}!`
      });
    }
  }).catch(err => {
    result.status(500).send({
      message: err.message || `Cannot delete cardetails object with id=${id}!`
    });
  });
};