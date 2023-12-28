const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
const db = mongoose.connection;
db.on('error',console.error.bind(console, 'Connection error'));
db.once('open', ()=>{
    console.log('Database connected');
});

const app = express();
const path = require('path');

const campgroundRoutes = require('./routes/campground');
const reviewRoutes = require('./routes/reviews');

app.engine('ejs',ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));

// Home route
app.get('/', (req, res) => {
    res.render('home');
});

app.use('/campgrounds',campgroundRoutes);
app.use('/campgrounds/:id/reviews',reviewRoutes);

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