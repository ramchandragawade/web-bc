const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/productDB')
.then(()=>{
    console.log('Success!!!!');
}).catch((err)=>{
    console.log('Failure!!!!'+err);
});
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
        default: ['on road']
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        offline:{
            type: Number,
            default: 0
        }
    },
    size:{
        type: String,
        enum: ['S','M','L']
    }
});

const Product = mongoose.model('Product',productSchema);
const bike = new Product({
    name: 'Cycle jersey',
    price: 700,
    categories:['Bike','Two Wheels', 22],
    size: 'L'
});
// bike.save().then(data=>console.log('It worked!!\n'+data)).catch(err=>console.log('Error:\n'+err));

Product.findOneAndUpdate({ name: "Bike" }, { price: -999 }, {new:true, runValidators: true}).then((data) => console.log(data)).catch((data) => console.log("err:/n" + data));