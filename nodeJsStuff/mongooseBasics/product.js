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

// productSchema.methods.greet = function(){
//     console.log('Hiiiiiiiiii: from - ' + this.name);
// }

productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategories = function(newCat){
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = async function(){
    const data = await this.updateMany({},{onSale: true, price:1});
    console.log(data);
    return this.find();
}

const Product = mongoose.model('Product',productSchema);
const bike = new Product({
    name: 'Cycle jersey',
    price: 700,
    categories:['Bike','Two Wheels', 22],
    size: 'L'
});

// bike.save();
const findProduct = async function (){
    const gotProd = await Product.findOne({name: 'Cycle jersey'});
    console.log(gotProd);
    await gotProd.toggleOnSale();
    console.log(gotProd);
    await gotProd.addCategories('Outdoors');
    console.log(gotProd);
    // gotProd.greet();
}
// findProduct();

// Product.fireSale().then(res=>console.log(res));

// bike.save().then(data=>console.log('It worked!!\n'+data)).catch(err=>console.log('Error:\n'+err));

// Product.findOneAndUpdate({ name: "Bike" }, { price: -999 }, {new:true, runValidators: true}).then((data) => console.log(data)).catch((data) => console.log("err:/n" + data));