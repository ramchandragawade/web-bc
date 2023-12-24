const express = require('express');
const app = express();
const path = require('path');
app.set('views', path.join(__dirname,'/views'));
app.set('view engine','ejs');

const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmMarket')
.then(()=>{
    console.log('MONGO Connected!!!!');
}).catch((err)=>{
    console.log('MONGO Failure!!!!'+err);
});

app.get('/products',async (req,res)=>{
    const allProd = await Product.find({});
    res.render('products/index', {allProd});
});

app.listen(3000,()=>{
    console.log('Connected to 3000!!!');
});