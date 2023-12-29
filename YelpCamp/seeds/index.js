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

const {sampleImgs} = require('./serveImgs');

const sampleGeo = [
    { type: 'Point', coordinates: [-97.7437, 30.271129] },
    { type: 'Point', coordinates: [-115.139421, 36.167398] },
    { type: 'Point', coordinates: [-118.329523, 34.098003] }
];

const getRandomImg = (prev) =>{
    const index = Math.floor(Math.random()*10);
    if(prev==index){
        return getRandomImg(prev);
    } else {
        return ({img:sampleImgs.at(index),index});
    }
}

const seedDB = async() =>{
    await Campground.deleteMany({});
    for(let i=0; i<50; i++){
        const rand1000 = Math.floor(Math.random()*1000);
        const price = Math.floor(Math.random()*100)+10;
        const firstImg = getRandomImg();
        const secondImg = getRandomImg(firstImg.index);
        const camp = new Campground({
            author: '658dd7d3130d4755e816d007',
            location: `${cities[rand1000].city}, ${cities[rand1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                firstImg.img,
                secondImg.img
            ],
            geometry: sampleGeo.at(Math.floor(Math.random()*3)),
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea aliquid quidem cumque amet. Facilis autem, quos, facere quidem laudantium.',
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