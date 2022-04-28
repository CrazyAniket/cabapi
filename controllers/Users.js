const db = require("../models");
const userObj = db.user;
const Op = db.Sequelize.Op;

const jwt                 = require('jsonwebtoken');
const bcrypt              = require('bcryptjs');
const {validationResult}  = require('express-validator');

// Create and save new
exports.create = (request, result) => {
  if (!request.body.userid) {
    result.status(400).send({
      message: "user cannot be empty"
    });
  }

  // Create a object
  const user = {
    userid: request.body.userid,
    roleid: request.body.roleid,
    username: request.body.username,
    password: request.body.password,
    passtxt: request.body.passtxt,
    passchangedate: request.body.passchangedate,
    
    active: request.body.active ? request.body.active : 0,
    delete_flag: request.body.delete_flag ? request.body.delete_flag : 0,
    created_by: request.body.created_by ? request.body.created_by : '', 
    updated_by: request.body.updated_by ? request.body.updated_by : '',
  };

  // Save object to db
  userObj.create(user).then(data => {
    result.send(data);
  }).catch(err => {
    result.status(500).send({
      message: err.message || "Some error occurred while saving."
    });
  });
};

// Retrieve all (Receive data with condition).
exports.getAll = (request, result) => {
  userObj.findAll()
    .then(data => {
      result.send(data);
    }).catch(err => {
      result.status(500).send({
        message: err.message || "Some error occurred while retrieving data."
      });
    });
};

// Get Login 
exports.login = async (req,res,next) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }

    try{

        const [row] = await userObj.findAll({
            where: { username: req.body.username }
          });

        // if (row.length === 0) {
        //     return res.status(422).json({
        //         message: "Invalid email address",
        //     });
        // }

        //console.log(row.username);
        // const passMatch = await bcrypt.compare(req.body.password, row.password);
        // if(!passMatch){
        //     return res.status(422).json({
        //         message: "Incorrect password",
        //     });
       // }

        const theToken = jwt.sign({id:row.id},'the-super-strong-secrect',{ expiresIn: '1h' });

        return res.json({
            token:theToken,
            data: row
        });

    }
    catch(err){
        next(err);
    }
}

//logout
exports.logout = (req,res) => {

   req.session.destroy((err) =>{
       res.redirect('/');
    })

};

// Get object by ID
exports.getByID = (request, result) => {
  const paramID = request.params.id;
  userObj.findAll({
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
  userObj.update(request.body, {
    where: { id: paramID }
  }).then(num => {
    console.log(num[0]);
    if (num[0] === 1) {
      result.send({
        message: "user object successfully updated."
      });
    } else {
      result.send({
        message: `Cannot update user object with id=${paramID}!`
      });
    }
  }).catch(err => {
    result.status(500).send({
      message: err.message || `Error while updating user object with id=${paramID}!`
    });
  });
};

// Delete object by ID
exports.deleteByID = (request, result) => {
  const id = request.params.id;
  userObj.destroy({
    where: { id: id }
  }).then(num => {
    if (num === 1) {
      result.send({
        message: "user object successfully deleted."
      });
    } else {
      result.send({
        message: `Cannot delete user object with id=${id}!`
      });
    }
  }).catch(err => {
    result.status(500).send({
      message: err.message || `Cannot delete user object with id=${id}!`
    });
  });
};