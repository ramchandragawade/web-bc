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

const sampleImgs = [
    {
      url: 'https://res.cloudinary.com/duhlvrita/image/upload/v1703850388/YelpCamp/pztqgnrfmclzubara1qd.jpg',
      filename: 'YelpCamp/pztqgnrfmclzubara1qd'
    },
    {
      url: 'https://res.cloudinary.com/duhlvrita/image/upload/v1703850390/YelpCamp/x1z2iviujod6xm8xnqft.jpg',
      filename: 'YelpCamp/x1z2iviujod6xm8xnqft'
    },
    {
      url: 'https://res.cloudinary.com/duhlvrita/image/upload/v1703850392/YelpCamp/xfosz7uc8uimdykwapoe.jpg',
      filename: 'YelpCamp/xfosz7uc8uimdykwapoe'
    },
    {
      url: 'https://res.cloudinary.com/duhlvrita/image/upload/v1703850393/YelpCamp/o8xe0fgp7phbzrk7epu1.jpg',
      filename: 'YelpCamp/o8xe0fgp7phbzrk7epu1'
    },
    {
      url: 'https://res.cloudinary.com/duhlvrita/image/upload/v1703850395/YelpCamp/bkiyu4yzvl3bnnbxqvnp.jpg',
      filename: 'YelpCamp/bkiyu4yzvl3bnnbxqvnp'
    },
    {
      url: 'https://res.cloudinary.com/duhlvrita/image/upload/v1703850396/YelpCamp/bvufzgq0kicckzml47w0.jpg',
      filename: 'YelpCamp/bvufzgq0kicckzml47w0'
    },
    {
      url: 'https://res.cloudinary.com/duhlvrita/image/upload/v1703850397/YelpCamp/ocwtlmajygkjqiult1bj.jpg',
      filename: 'YelpCamp/ocwtlmajygkjqiult1bj'
    },
    {
      url: 'https://res.cloudinary.com/duhlvrita/image/upload/v1703850399/YelpCamp/uglkicz7nae3jqz1jpfo.jpg',
      filename: 'YelpCamp/uglkicz7nae3jqz1jpfo'
    },
    {
      url: 'https://res.cloudinary.com/duhlvrita/image/upload/v1703850400/YelpCamp/g1lrh1splmmbr6jvjlen.jpg',
      filename: 'YelpCamp/g1lrh1splmmbr6jvjlen'
    },
    {
      url: 'https://res.cloudinary.com/duhlvrita/image/upload/v1703850402/YelpCamp/f5tfaxh5hnkgyvntcwqz.jpg',
      filename: 'YelpCamp/f5tfaxh5hnkgyvntcwqz'
    }
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