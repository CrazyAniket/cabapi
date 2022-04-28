const db = require("../models");
const hrmanageObj = db.hrmanage;
const Op = db.Sequelize.Op;

// Create and save new
exports.create = (request, result) => {
  if (!request.body.firstname) {
    result.status(400).send({
      message: "firstname cannot be empty"
    });
  }

  // Create a object
  const hrmanage = {
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
  hrmanageObj.create(hrmanage).then(data => {
    let id = data[0]['id'];
    db.query(`INSERT INTO user_login_masters (id, userid, roleid, username, password, passtxt, active, delete_flag,
      created_by) VALUES (NULL, id, 'request.body.email', 'request.body.password', 'request.body.password','1','0'
      ,'request.body.firstname')`);
    result.send(data);

  }).catch(err => {
    result.status(500).send({
      message: err.message || "Some error occurred while saving."
    });
  });
};

// Retrieve all (Receive data with condition).
exports.getAll = (request, result) => {
  hrmanageObj.findAll()
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
  hrmanageObj.findAll({
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
  hrmanageObj.update(request.body, {
    where: { id: paramID }
  }).then(num => {
    console.log(num[0]);
    if (num[0] === 1) {
      result.send({
        message: "hrmanage object successfully updated."
      });
    } else {
      result.send({
        message: `Cannot update hrmanage object with id=${paramID}!`
      });
    }
  }).catch(err => {
    result.status(500).send({
      message: err.message || `Error while updating hrmanage object with id=${paramID}!`
    });
  });
};

// Delete object by ID
exports.deleteByID = (request, result) => {
  const id = request.params.id;
  hrmanageObj.destroy({
    where: { id: id }
  }).then(num => {
    if (num === 1) {
      result.send({
        message: "hrmanage object successfully deleted."
      });
    } else {
      result.send({
        message: `Cannot delete hrmanage object with id=${id}!`
      });
    }
  }).catch(err => {
    result.status(500).send({
      message: err.message || `Cannot delete hrmanage object with id=${id}!`
    });
  });
};
