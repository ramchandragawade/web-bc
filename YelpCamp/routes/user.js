const express = require('express');
const router = express.Router();
const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');

router.get('/register',(req,res)=>{
    res.render('users/register');
});

router.post('/register', catchAsync(async(req,res)=>{
    try {
        const {username,password,email} = req.body;
        const user = new User({email,username});
        const registeredUser = await User.register(user,password);
        console.log(registeredUser);
        req.flash('success','Welcome to YelpCamp! '+ username);
        res.redirect('/campgrounds');    
    } catch(e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
}));

router.get('/login',(req,res)=>{
    res.render('users/login');
});

router.post('/login', passport.authenticate('local',{failureFlash:true,failureRedirect:'/login'}), async(req,res)=>{
    req.flash('success',`Welcome back ${req.body.username}!!!`);
    res.redirect('/campgrounds'); 
});

router.get('/logout',(req,res)=>{
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/campgrounds');
    });
});

module.exports = router;