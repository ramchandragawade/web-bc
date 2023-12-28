const express = require('express');
const router = express.Router();
const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const userController = require('../controllers/user');
const { storeReturnTo } = require('../middleware');

router.route('/register')
// show register form
.get(userController.showRegisterForm)
// register the user
.post(catchAsync(userController.registerUser));

router.route('/login')
//show login form
.get(userController.showLoginForm)
// submit login req & auth
.post(
    storeReturnTo,
    passport.authenticate('local',{failureFlash:true,failureRedirect:'/login'}),
    userController.postLogin
    );

//logout the user
router.get('/logout',userController.logoutUser);

module.exports = router;