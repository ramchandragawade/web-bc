const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.connect('mongodb://127.0.0.1:27017/relDemo')
.then(()=>{
    console.log('Success!!!!');
}).catch((err)=>{
    console.log('Failure!!!!'+err);
});

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall','Winter']
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

const Product = mongoose.model('Product',productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     { name: 'Melons', price: 15, season: 'Winter' },
//     { name: 'Banana', price: 10, season: 'Spring' },
//     { name: 'Mango', price: 50, season: 'Summer' },
//     { name: 'Watermelon', price: 25, season: 'Summer' }
// ]);

const makeFarm = async()=>{
    const farm = new Farm({name:'New London Farm', city:'London'});
    const melon = await Product.findOne({name:'Mango'});
    farm.products.push(melon);
    await farm.save();
    console.log(farm);
}
// makeFarm();
const addProduct = async()=>{
    const farm = await Farm.findOne({name: 'New London Farm'});
    const banana = await Product.findOne({name: 'Banana'});
    farm.products.push(banana);
    await farm.save();
    console.log(farm);
}
addProduct()
