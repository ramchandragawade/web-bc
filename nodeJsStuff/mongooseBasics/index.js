const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/moviesDB')
.then(()=>{
    console.log('Success!!!!');
}).catch((err)=>{
    console.log('Failure!!!!'+err);
});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console,'Connection error'));
// db.once('open', function(){
//     console.log('Success.')
// })

const moviesSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    adult: Boolean
});

const Movie = mongoose.model('Movie',moviesSchema);
// const don = new Movie({
//     title: 'Don',
//     year: 2006,
//     score: 8,
//     adult: false
// });

// Movie.insertMany([
//     {
//         title: 'Don 2',
//         year: 2011,
//         score: 7,
//         adult: true
//     },
//     {
//         title: 'Avengers',
//         year: 2010,
//         score: 7,
//         adult: false
//     },
//     {
//         title: 'Spiderman',
//         year: 2005,
//         score: 9,
//         adult: false
//     },
//     {
//         title: 'End game',
//         year: 2018,
//         score: 10,
//         adult: false
//     },
//     {
//         title: 'Stand by me',
//         year: 1990,
//         score: 7,
//         adult: true
//     }
// ]).then((msg)=>{
//     console.log('Success:'+msg);
// }).catch((err)=>{
//     console.log('Failed:'+err);
// });

// > Movie.findOneAndDelete({title:'Avengers'}).then(data=>console.log(data))
// > Movie.deleteOne({title:'Don'}).then(data=>console.log(data))
// > Movie.findOneAndUpdate({title:'Don'},{score:8},{new:true}).then(data=>console.log(data))