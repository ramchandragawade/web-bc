const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be empty']
    },
    price: {
        type: Number,
        required: [true, 'Price cannot be empty'],
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'veggie', 'dairy']
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;