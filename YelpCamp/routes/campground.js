const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const Campground = require('../models/campground');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const campgroundController = require('../controllers/campground');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// (get) Campgroung index route
// (post) Add New campground form submission route(POST)
router.route('/')
.get(campgroundController.index)
// .post(isLoggedIn, validateCampground, catchAsync(campgroundController.createCamp));
.post(upload.array('image'),(req,res)=>{
    console.log(req.body,req.files);
    res.send('done')
});

// New campground form route
router.get('/new', isLoggedIn, campgroundController.renderNewForm);

// (get) Show selected campground route
// (put) Update edited campground route
// (delete) delete campground route
router.route('/:id')
.get(catchAsync(campgroundController.showCamp))
.put(isLoggedIn, isAuthor, validateCampground, catchAsync(campgroundController.updateCamp))
.delete(isLoggedIn, isAuthor, catchAsync(campgroundController.deleteCamp));

// Edit campground form route
router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgroundController.renderEditForm));

module.exports = router;