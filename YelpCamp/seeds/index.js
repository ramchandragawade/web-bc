const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const {places,descriptors} = require('./seedHelpers');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
const db = mongoose.connection;
db.on('error',console.error.bind(console, 'Connection error'));
db.once('open', ()=>{
    console.log('Database connected');
});

const sample = (array)=>array[Math.floor(Math.random()*array.length)];

const seedDB = async() =>{
    await Campground.deleteMany({});
    for(let i=0; i<50; i++){
        const rand1000 = Math.floor(Math.random()*1000);
        const price = Math.floor(Math.random()*100)+10;
        const camp = new Campground({
            location: `${cities[rand1000].city}, ${cities[rand1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea aliquid quidem cumque amet. Facilis autem, quos, facere quidem laudantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea aliquid quidem cumque amet. Facilis autem, quos, facere quidem laudantium',
            price
        })
        await camp.save();
    }
}
seedDB().then(() => {
    Campground.find({}).then(data => {
        console.log(data);
        db.close();
    });
});