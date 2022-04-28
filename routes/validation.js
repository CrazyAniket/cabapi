const { check } = require('express-validator');
 
exports.loginValidation = [
     check('username', 'Please include a valid username').isLength({ min: 6 }),
     check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
 
]