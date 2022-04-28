const db = require("../models");
const userroleroleObj = db.userrole;
const Op = db.Sequelize.Op;

// Create and save new
exports.create = (request, result) => {
  if (!request.body.rolename) {
    result.status(400).send({
      message: "userrole cannot be empty"
    });
  }

  // Create a object
  const userrole = {
    rolename: request.body.rolename,    
    active: request.body.active ? request.body.active : 0,
    delete_flag: request.body.delete_flag ? request.body.delete_flag : 0,
    created_by: request.body.created_by ? request.body.created_by : '', 
    updated_by: request.body.updated_by ? request.body.updated_by : '',
  };

  // Save object to db
  userroleroleObj.create(userrole).then(data => {
    result.send(data);
  }).catch(err => {
    result.status(500).send({
      message: err.message || "Some error occurred while saving."
    });
  });
};

// Retrieve all (Receive data with condition).
exports.getAll = (request, result) => {
  userroleroleObj.findAll()
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
  userroleroleObj.findAll({
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
  userroleroleObj.update(request.body, {
    where: { id: paramID }
  }).then(num => {
    console.log(num[0]);
    if (num[0] === 1) {
      result.send({
        message: "userrole object successfully updated."
      });
    } else {
      result.send({
        message: `Cannot update userrole object with id=${paramID}!`
      });
    }
  }).catch(err => {
    result.status(500).send({
      message: err.message || `Error while updating userrole object with id=${paramID}!`
    });
  });
};

// Delete object by ID
exports.deleteByID = (request, result) => {
  const id = request.params.id;
  userroleroleObj.destroy({
    where: { id: id }
  }).then(num => {
    if (num === 1) {
      result.send({
        message: "userrole object successfully deleted."
      });
    } else {
      result.send({
        message: `Cannot delete userrole object with id=${id}!`
      });
    }
  }).catch(err => {
    result.status(500).send({
      message: err.message || `Cannot delete userrole object with id=${id}!`
    });
  });
};