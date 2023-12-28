const express = require('express');
const router = express.Router();
const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');
const Campground = require('../models/campground');
const {campgroundSchema} = require('../validationSchemas');

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
router.get('/new', (req,res)=>{
    res.render('campgrounds/new');
});

// Add New campground form submission route(POST)
router.post('/',validateCampground, catchAsync(async(req,res,next)=>{
    const newCamp = new Campground(req.body.campground);
    await newCamp.save();
    req.flash('success','Successfully added a new campground!');
    res.redirect('/campgrounds/'+newCamp._id);
}));

// Show selected campground route
router.get('/:id', catchAsync(async(req,res)=>{
    const {id} = req.params;
    const camp = await Campground.findById(id).populate('reviews');
    res.render('campgrounds/show', {camp});
}));

// Update edited campground route
router.put('/:id',validateCampground, catchAsync(async(req,res)=>{
    const {id} = req.params;
    const camp = await Campground.findByIdAndUpdate(id,{...req.body.campground});
    res.redirect(`/campgrounds/${camp._id}`);
}));

// delete campground route
router.delete('/:id',catchAsync(async(req,res)=>{
    const {id} = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect(`/campgrounds`);
}));

// Edit campground form route
router.get('/:id/edit',catchAsync(async(req,res)=>{
    const camp = await Campground.findById(req.params.id);
    res.render('campgrounds/edit', {camp});
}));

module.exports = router;