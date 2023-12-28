const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const Campground = require('../models/campground');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const campgroundController = require('../controllers/campground');

// Campgroung index route
router.get('/', campgroundController.index);

// New campground form route
router.get('/new', isLoggedIn, campgroundController.renderNewForm);

// Add New campground form submission route(POST)
router.post('/', isLoggedIn, validateCampground, catchAsync(campgroundController.createCamp));

// Show selected campground route
router.get('/:id', catchAsync(campgroundController.showCamp));

// Edit campground form route
router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgroundController.renderEditForm));

// Update edited campground route
router.put('/:id', isLoggedIn, isAuthor, validateCampground, catchAsync(campgroundController.updateCamp));

// delete campground route
router.delete('/:id', isLoggedIn, isAuthor, catchAsync(campgroundController.deleteCamp));

module.exports = router;