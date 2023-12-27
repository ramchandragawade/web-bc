const mongoose = require('mongoose');
const Product = require('./product');
const { Schema } = mongoose;
const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});
farmSchema.post('findOneAndDelete', async function(farm){
    if(farm.products.length>0){
        const deletedProd = await Product.deleteMany({_id: {$in:farm.products}});
        console.log(deletedProd);
    }
    console.log('Post mw',farm);
});
const Farm = mongoose.model('Farm', farmSchema);
module.exports = Farm;