const db = require("../models");
const adminObj = db.admin;
const Op = db.Sequelize.Op;

// Create and save new
exports.create = (request, result) => {
  if (!request.body.firstname) {
    result.status(400).send({
      message: "firstname cannot be empty"
    });
  }

  // Create a object
  const admin = {
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    email: request.body.email,
    mobile: request.body.mobile,
    gender: request.body.gender,
    photo: request.body.photo,
    address: request.body.address,
    city: request.body.city,
    state: request.body.state,
    country: request.body.country,
    
    active: request.body.active ? request.body.active : 0,
    delete_flag: request.body.delete_flag ? request.body.delete_flag : 0,
    created_by: request.body.created_by ? request.body.created_by : '', 
    updated_by: request.body.updated_by ? request.body.updated_by : '',
  };

  // Save object to db
  adminObj.create(admin).then(data => {
    result.send(data);
  }).catch(err => {
    result.status(500).send({
      message: err.message || "Some error occurred while saving."
    });
  });
};

// Retrieve all (Receive data with condition).
exports.getAll = (request, result) => {
  adminObj.findAll()
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
  adminObj.findAll({
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
  adminObj.update(request.body, {
    where: { id: paramID }
  }).then(num => {
    console.log(num[0]);
    if (num[0] === 1) {
      result.send({
        message: "admin object successfully updated."
      });
    } else {
      result.send({
        message: `Cannot update admin object with id=${paramID}!`
      });
    }
  }).catch(err => {
    result.status(500).send({
      message: err.message || `Error while updating admin object with id=${paramID}!`
    });
  });
};

// Delete object by ID
exports.deleteByID = (request, result) => {
  const id = request.params.id;
  adminObj.destroy({
    where: { id: id }
  }).then(num => {
    if (num === 1) {
      result.send({
        message: "admin object successfully deleted."
      });
    } else {
      result.send({
        message: `Cannot delete admin object with id=${id}!`
      });
    }
  }).catch(err => {
    result.status(500).send({
      message: err.message || `Cannot delete admin object with id=${id}!`
    });
  });
};