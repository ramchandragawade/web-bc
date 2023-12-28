const express = require('express');
const router = express.Router();
const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');
const Campground = require('../models/campground');
const { campgroundSchema } = require('../validationSchemas');
const { isLoggedIn } = require('../middleware');

// Campground Validator middleware
const validateCampground = (req,res,next)=>{
    const {error} = campgroundSchema.validate(req.body);
    if(error) {
        console.log(error);
        const msg = error.details.map(el=>el.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

// Campgroung index route
router.get('/', async(req,res)=>{
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', {campgrounds});
});

// New campground form route
router.get('/new', isLoggedIn, (req,res)=>{
    res.render('campgrounds/new');
});

// Add New campground form submission route(POST)
router.post('/', isLoggedIn, validateCampground, catchAsync(async(req,res,next)=>{
    const newCamp = new Campground(req.body.campground);
    newCamp.author = req.user._id;
    await newCamp.save();
    req.flash('success','Successfully added a new campground!');
    res.redirect('/campgrounds/'+newCamp._id);
}));

// Show selected campground route
router.get('/:id', catchAsync(async(req,res)=>{
    const {id} = req.params;
    const camp = await Campground.findById(id).populate('reviews').populate('author');
    if(!camp){
        req.flash('error','Campground not found!');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/show', {camp});
}));

// Update edited campground route
router.put('/:id', isLoggedIn, validateCampground, catchAsync(async(req,res)=>{
    const {id} = req.params;
    const camp = await Campground.findById(id);
    if(!camp.author.equals(req.user._id)){
        req.flash('error',`You don't have permission to update.`);
        return res.redirect(`/campgrounds/${id}`);        
    }
    const updatedCamp = await Campground.findByIdAndUpdate(id,{...req.body.campground},{new:true});
    req.flash('success',`Successfully updated ${updatedCamp.title}!`);
    res.redirect(`/campgrounds/${updatedCamp._id}`);
}));

// delete campground route
router.delete('/:id',isLoggedIn,catchAsync(async(req,res)=>{
    const {id} = req.params;
    if(!camp.author.equals(req.user._id)){
        req.flash('error',`You don't have permission to delete.`);
        return res.redirect(`/campgrounds/${id}`);        
    }
    await Campground.findByIdAndDelete(id);
    req.flash('success',`Successfully deleted the campground!`);
    res.redirect(`/campgrounds`);
}));

// Edit campground form route
router.get('/:id/edit', isLoggedIn, catchAsync(async(req,res)=>{
    const { id } = req.params;
    const camp = await Campground.findById(id);
    if(!camp){
        req.flash('error','Campground not found!');
        return res.redirect('/campgrounds');
    }
    if(!camp.author.equals(req.user._id)){
        req.flash('error',`You don't have permission to update.`);
        return res.redirect(`/campgrounds/${id}`);        
    }
    res.render('campgrounds/edit', {camp});
}));

module.exports = router;