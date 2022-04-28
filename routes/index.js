const post = require("../controllers/Post");

const carcapacity 		= require("../controllers/Carcapacity");
const carcolor 			= require("../controllers/Carcolor");
const carmodel 			= require("../controllers/Carmodel");
const cartype 			= require("../controllers/Cartype");
const carmanufacture 	= require("../controllers/Carmanufacture");
const city 				= require("../controllers/City");
const state 			= require("../controllers/State");
const country 			= require("../controllers/Country");
const hrmanage 			= require("../controllers/Hrmanage");
const driver 			= require("../controllers/Driver");
const cardetails 		= require("../controllers/Cardetails");

const documents 		= require("../controllers/Documents");

const users 			= require("../controllers/Users");
const userrole 			= require("../controllers/Userrole");
const admindetails 		= require("../controllers/Admindetails");

const assignhr 		= require("../controllers/Assignhr");

const express = require("express");
const router = express.Router();
const { body } = require('express-validator');

//Login

router.post('/api/login',[
    body('username',"Invalid email address")
    .notEmpty(),
    body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
],users.login);


router.get('/api/logout',users.logout);

// Create New Post

router.post("/api/posts/create", post.create);
// // Retrieve all posts
router.get("/api/posts/all", post.getAllPosts);
// Retrieve all Published posts
router.get("/api/posts/published", post.getAllPublishedPosts);
// Retrieve all Published posts by Publisher Name
router.get("/api/posts/publisher", post.getAllPostsByPublisherName);
// Retrieve all posts by title
router.get("/api/posts", post.getPostByTitle);
// Retrieve post by ID
router.get("/api/posts/:id", post.getPostByID);
// // Update post by ID
router.put("/api/post/update/:id", post.updatePostByID);
// // Delete post by ID
router.delete("/api/post/delete/:id", post.deletePostByID);
// Delete all posts
router.delete("/api/posts/deleteAll", post.deleteAllPosts);


//Amit
// Car Capacity
router.post("/api/carcapacity/create", carcapacity.create);
router.get("/api/carcapacity/all", carcapacity.getAll);
router.get("/api/carcapacity/:id", carcapacity.getByID);
router.put("/api/carcapacity/update/:id", carcapacity.updateByID);
router.delete("/api/carcapacity/delete/:id", carcapacity.deleteByID);

// Car Color
router.post("/api/carcolor/create", carcolor.create);
router.get("/api/carcolor/all", carcolor.getAll);
router.get("/api/carcolor/:id", carcolor.getByID);
router.put("/api/carcolor/update/:id", carcolor.updateByID);
router.delete("/api/carcolor/delete/:id", carcolor.deleteByID);

// Car Model
router.post("/api/carmodel/create", carmodel.create);
router.get("/api/carmodel/all", carmodel.getAll);
router.get("/api/carmodel/:id", carmodel.getByID);
router.put("/api/carmodel/update/:id", carmodel.updateByID);
router.delete("/api/carmodel/delete/:id", carmodel.deleteByID);

// Car Type
router.post("/api/cartype/create", cartype.create);
router.get("/api/cartype/all", cartype.getAll);
router.get("/api/cartype/:id", cartype.getByID);
router.put("/api/cartype/update/:id", cartype.updateByID);
router.delete("/api/cartype/delete/:id", cartype.deleteByID);

// Car Manufacture
router.post("/api/carmanufacture/create", carmanufacture.create);
router.get("/api/carmanufacture/all", carmanufacture.getAll);
router.get("/api/carmanufacture/:id", carmanufacture.getByID);
router.put("/api/carmanufacture/update/:id", carmanufacture.updateByID);
router.delete("/api/carmanufacture/delete/:id", carmanufacture.deleteByID);

// City
router.post("/api/city/create", city.create);
router.get("/api/city/all", city.getAll);
router.get("/api/city/:id", city.getByID);
router.put("/api/city/update/:id", city.updateByID);
router.delete("/api/city/delete/:id", city.deleteByID);

// State
router.post("/api/state/create", state.create);
router.get("/api/state/all", state.getAll);
router.get("/api/state/:id", state.getByID);
router.put("/api/state/update/:id", state.updateByID);
router.delete("/api/state/delete/:id", state.deleteByID);

// Country
router.post("/api/country/create", country.create);
router.get("/api/country/all", country.getAll);
router.get("/api/country/:id", country.getByID);
router.put("/api/country/update/:id", country.updateByID);
router.delete("/api/country/delete/:id", country.deleteByID);

// HR Management
router.post("/api/hrmanage/create", hrmanage.create);
router.get("/api/hrmanage/all", hrmanage.getAll);
router.get("/api/hrmanage/:id", hrmanage.getByID);
router.put("/api/hrmanage/update/:id", hrmanage.updateByID);
router.delete("/api/hrmanage/delete/:id", hrmanage.deleteByID);

// Driver
router.post("/api/driver/create", driver.create);
router.get("/api/driver/all", driver.getAll);
router.get("/api/driver/:id", driver.getByID);
router.put("/api/driver/update/:id", driver.updateByID);
router.delete("/api/driver/delete/:id", driver.deleteByID);

// Car Details
router.post("/api/cardetails/create", cardetails.create);
router.get("/api/cardetails/all", cardetails.getAll);
router.get("/api/cardetails/:id", cardetails.getByID);
router.put("/api/cardetails/update/:id", cardetails.updateByID);
router.delete("/api/cardetails/delete/:id", cardetails.deleteByID);

//Master Documents
router.post("/api/documents/create", documents.create);
router.get("/api/documents/all", documents.getAll);
router.get("/api/documents/:id", documents.getByID);
router.put("/api/documents/update/:id", documents.updateByID);
router.delete("/api/documents/delete/:id", documents.deleteByID);

///Assign Driver To HR
//router.post("/api/assign/driver/:id", hrmanage.assigndriver);
//router.get("/api/hr/assignlist", hrmanage.assignlist);

//Driver

module.exports = router;
