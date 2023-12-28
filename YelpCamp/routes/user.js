const express = require('express');
const router = express.Router();
const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const userController = require('../controllers/user');
const { storeReturnTo } = require('../middleware');

// show register form
router.get('/register',userController.showRegisterForm);

// register the user
router.post('/register', catchAsync(userController.registerUser));

//show login form
router.get('/login',userController.showLoginForm);

// submit login req & auth
router.post('/login',
    storeReturnTo,
    passport.authenticate('local',{failureFlash:true,failureRedirect:'/login'}),
    userController.postLogin);

//logout the user
router.get('/logout',userController.logoutUser);

module.exports = router;