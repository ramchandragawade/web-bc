const mongoose = require('mongoose');
const Product = require('./models/product');
mongoose.connect('mongodb://127.0.0.1:27017/farmMarket')
.then(()=>{
    console.log('MONGO Connected!!!!');
}).catch((err)=>{
    console.log('MONGO Failure!!!!'+err);
});

// const p = new Product({
//     name: 'Mango',
//     price: 3,
//     category: 'Fruit'
// });
// p.save().then(data=>console.log(data)).catch(msg=>console.log(msg));

const seedProducts = [
    {
        name: 'Mango',
        price: 5,
        category: 'Fruit'
    },
    {
        name: 'Banana',
        price: 1,
        category: 'Fruit'
    },
    {
        name: 'Melons',
        price: 2,
        category: 'Fruit'
    },
    {
        name: 'Watermelon',
        price: 4,
        category: 'fruit'
    },
    {
        name: 'Celery',
        price: 1.5,
        category: 'Veggie'
    },
    {
        name: 'Amul milk',
        price: 2.5,
        category: 'Dairy'
    },
    {
        name: 'Bread',
        price: 1.5,
        category: 'Dairy'
    },
    {
        name: 'Potato',
        price: 0.5,
        category: 'Veggie'
    }
];
Product.insertMany(seedProducts).then(data=>{console.log(data)}).catch(err=>console.log(err));