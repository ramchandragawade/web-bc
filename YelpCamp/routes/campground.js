const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const Campground = require('../models/campground');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const campgroundController = require('../controllers/campground');

router.route('/')
// Campgroung index route
.get(campgroundController.index)
// Add New campground form submission route(POST)
.post(isLoggedIn, validateCampground, catchAsync(campgroundController.createCamp));

// New campground form route
router.get('/new', isLoggedIn, campgroundController.renderNewForm);

router.route('/:id')
// Show selected campground route
.get(catchAsync(campgroundController.showCamp))
// Update edited campground route
.put(isLoggedIn, isAuthor, validateCampground, catchAsync(campgroundController.updateCamp))
// delete campground route
.delete(isLoggedIn, isAuthor, catchAsync(campgroundController.deleteCamp));

// Edit campground form route
router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgroundController.renderEditForm));

module.exports = router;