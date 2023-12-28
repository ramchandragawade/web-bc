const express = require('express');
const router = express.Router({mergeParams:true});
const catchAsync = require('../utils/catchAsync');
const Campground = require('../models/campground');
const Review = require('../models/review');
const { validateReview, isLoggedIn } = require('../middleware');

// Add campground review form route(POST)
router.post('/', isLoggedIn, validateReview, catchAsync(async(req,res)=>{
    const { id } = req.params;
    const camp = await Campground.findById(id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    camp.reviews.push(review);
    await review.save();
    await camp.save();
    req.flash('success','Added a new review!');
    res.redirect('/campgrounds/'+id);
}));
// delete review route
router.delete('/:reviewId',catchAsync(async(req,res)=>{
    const {id,reviewId} = req.params;
    await Campground.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash('success','Successfully deleted the review!');
    res.redirect('/campgrounds/'+id);
}));

module.exports = router;