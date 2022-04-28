const db = require("../models");
const carcapacityObj = db.carcapacity;
const Op = db.Sequelize.Op;

// Create and save new
exports.create = (request, result) => {
  if (!request.body.capacity) {
    result.status(400).send({
      message: "capacity cannot be empty"
    });
  }

  // Create a object
  const carcapacity = {
    capacity: request.body.capacity,   
    active: request.body.active ? request.body.active : 0,
    delete_flag: request.body.delete_flag ? request.body.delete_flag : 0,
    created_by: request.body.created_by ? request.body.created_by : '', 
    updated_by: request.body.updated_by ? request.body.updated_by : '', 
  };

  // Save object to db
  carcapacityObj.create(carcapacity).then(data => {
    result.send(data);
  }).catch(err => {
    result.status(500).send({
      message: err.message || "Some error occurred while saving."
    });
  });
};

// Retrieve all (Receive data with condition).
exports.getAll = (request, result) => {
  carcapacityObj.findAll()
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
  carcapacityObj.findAll({
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
  carcapacityObj.update(request.body, {
    where: { id: paramID }
  }).then(num => {
    console.log(num[0]);
    if (num[0] === 1) {
      result.send({
        message: "carcapacity object successfully updated."
      });
    } else {
      result.send({
        message: `Cannot update carcapacity object with id=${paramID}!`
      });
    }
  }).catch(err => {
    result.status(500).send({
      message: err.message || `Error while updating carcapacity object with id=${paramID}!`
    });
  });
};

// Delete object by ID
exports.deleteByID = (request, result) => {
  const id = request.params.id;
  carcapacityObj.destroy({
    where: { id: id }
  }).then(num => {
    if (num === 1) {
      result.send({
        message: "carcapacity object successfully deleted."
      });
    } else {
      result.send({
        message: `Cannot delete carcapacity object with id=${id}!`
      });
    }
  }).catch(err => {
    result.status(500).send({
      message: err.message || `Cannot delete carcapacity object with id=${id}!`
    });
  });
};