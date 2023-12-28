const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const {campgroundSchema, reviewSchema} = require('./validationSchemas');


const ExpressError = require('./utils/ExpressError');
const catchAsync = require('./utils/catchAsync');

const Campground = require('./models/campground');
const Review = require('./models/review');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
const db = mongoose.connection;
db.on('error',console.error.bind(console, 'Connection error'));
db.once('open', ()=>{
    console.log('Database connected');
});

const app = express();
const path = require('path');

const campgroundRoutes = require('./routes/campground');

app.engine('ejs',ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const validateReview = (req,res,next)=>{
    const {error} = reviewSchema.validate(req.body);
    if(error) {
        console.log(error);
        const msg = error.details.map(el=>el.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}
// Home route
app.get('/', (req, res) => {
    res.render('home');
});

app.use('/campgrounds',campgroundRoutes);

// Add campground review form route(POST)
app.post('/campgrounds/:id/reviews',validateReview, catchAsync(async(req,res)=>{
    const { id } = req.params;
    const camp = await Campground.findById(id);
    const review = new Review(req.body.review);
    camp.reviews.push(review);
    await review.save();
    await camp.save();
    res.redirect('/campgrounds/'+id);
}));
// delete review route
app.delete('/campgrounds/:id/reviews/:reviewId',catchAsync(async(req,res)=>{
    const {id,reviewId} = req.params;
    await Campground.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect('/campgrounds/'+id);
}));
// Error handler
app.all('*',(req,res,next)=>{
    next(new ExpressError('Page not found!!!',404));
});
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message)
        err.message = 'Something went wrong';
    res.status(statusCode).render('error', { err });
});

app.listen(3000, function () {
    console.log('Serving on port 3000');
})