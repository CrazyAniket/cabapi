const db = require("../models");
const driverObj = db.driver;
const Op = db.Sequelize.Op;

const userObj = db.user;
let lastInsertid = "";
// Create and save new
exports.create = (request, result) => {
  if (!request.body.firstname) {
    result.status(400).send({
      message: "firstname cannot be empty"
    });
  }
  
  // Create a object
  const driver = {
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
  driverObj.create(driver).then(data => {
    //console.log(data.id);    
    lastInsertid = data.id;

    var lastInsertid = result.save(lastInsertid);
    console.log(lastInsertid);    
    result.send(data);

    // return lastInsertid;
    
  }).catch(err => {
    result.status(500).send({
      message: err.message || "Some error occurred while saving."
    });
  });
  

  const userLogin = {

        userid: lastInsertid,
        roleid: 3,
        username: request.body.username,
        password: request.body.confirmpassword,
        passtxt: request.body.confirmpassword,    
        
        active: request.body.active ? request.body.active : 0,
        delete_flag: request.body.delete_flag ? request.body.delete_flag : 0,
        created_by: request.body.created_by ? request.body.created_by : '', 
        updated_by: request.body.updated_by ? request.body.updated_by : '',
    };

   userObj.create(userLogin).then(data => {
    //result.send(data);

  }).catch(err => {
    //result.status(500).send({
    //  message: err.message || "Some error occurred while saving."
   // });
  });


};

// Retrieve all (Receive data with condition).
exports.getAll = (request, result) => {
  driverObj.findAll()
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
  driverObj.findAll({
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

  driverObj.update(request.body, {
    where: { id: paramID }
  }).then(num => {
    console.log(num[0]);
    if (num[0] === 1) {
      result.send({
        message: "driver object successfully updated."
      });
    } else {
      result.send({
        message: `Cannot update driver object with id=${paramID}!`
      });
    }
  }).catch(err => {
    result.status(500).send({
      message: err.message || `Error while updating driver object with id=${paramID}!`
    });
  });
};

// Delete object by ID
exports.deleteByID = (request, result) => {
  const id = request.params.id;
  driverObj.destroy({
    where: { id: id }
  }).then(num => {
    if (num === 1) {
      result.send({
        message: "driver object successfully deleted."
      });
    } else {
      result.send({
        message: `Cannot delete driver object with id=${id}!`
      });
    }
  }).catch(err => {
    result.status(500).send({
      message: err.message || `Cannot delete driver object with id=${id}!`
    });
  });
};