const express = require('express');
const app = express();
const path = require('path');
app.set('views', path.join(__dirname,'/views'));
app.set('view engine','ejs');

app.use(express.urlencoded({extended: true}));

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

app.get('/products/new',(req,res)=>{
    res.render('products/new');
});

app.post('/products',async (req,res)=>{
    const newProd = new Product(req.body);
    await newProd.save();
    // console.log(newProd);
    res.redirect('/products');
});

app.get('/products/:id',async (req,res)=>{
    const { id } = req.params;
    const prod = await Product.findById(id);
    // console.log(prod);
    // res.send('Details page');
    res.render('products/show',{prod});
});

app.listen(3000,()=>{
    console.log('Connected to 3000!!!');
});