const express = require('express');
const mongoose = require('mongoose');
const Campground = require('./models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
const db = mongoose.connection;
db.on('error',console.error.bind(console, 'Connection error'));
db.once('open', ()=>{
    console.log('Database connected');
});

const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/makeCampground', async (req, res) => {
    const newCamp = new Campground({title:'Backyard',price:1,description:'Cheap camp'});
    await newCamp.save();
    res.send(newCamp);
});



app.listen(3000, function () {
    console.log('Serving on port 3000');
})