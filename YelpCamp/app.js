const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const Campground = require('./models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
const db = mongoose.connection;
db.on('error',console.error.bind(console, 'Connection error'));
db.once('open', ()=>{
    console.log('Database connected');
});

const app = express();
const path = require('path');

app.engine('ejs',ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// Home route
app.get('/', (req, res) => {
    res.render('home');
});

// Campgroung index route
app.get('/campgrounds', async(req,res)=>{
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', {campgrounds});
});

// New campground form route
app.get('/campgrounds/new', (req,res)=>{
    res.render('campgrounds/new');
});

// Add New campground form submission route(POST)
app.post('/campgrounds', async(req,res,next)=>{
    try {
        const newCamp = new Campground(req.body.campground);
        await newCamp.save();
        res.redirect('/campgrounds');    
    } catch(e){
        next(e);
    }
});

// Show selected campground route
app.get('/campgrounds/:id', async(req,res)=>{
    const {id} = req.params;
    const camp = await Campground.findById(id);
    res.render('campgrounds/show', {camp});
});

// Update edited campground route
app.put('/campgrounds/:id', async(req,res)=>{
    const {id} = req.params;
    const camp = await Campground.findByIdAndUpdate(id,{...req.body.campground});
    res.redirect(`/campgrounds/${camp._id}`);
});

// delete campground route
app.delete('/campgrounds/:id', async(req,res)=>{
    const {id} = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect(`/campgrounds`);
});

// Edit campground form route
app.get('/campgrounds/:id/edit', async(req,res)=>{
    const camp = await Campground.findById(req.params.id);
    res.render('campgrounds/edit', {camp});
});

// Error handler
app.use((err, req, res, next)=>{
    res.send('Something went wrong.\n'+err);
});

app.listen(3000, function () {
    console.log('Serving on port 3000');
})