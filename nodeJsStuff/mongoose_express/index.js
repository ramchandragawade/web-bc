const express = require('express');
const app = express();
const path = require('path');
app.set('views', path.join(__dirname,'/views'));
app.set('view engine','ejs');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

const mongoose = require('mongoose');
const Product = require('./models/product');
const { log } = require('console');

const categories = ['fruit', 'veggie', 'dairy'];

mongoose.connect('mongodb://127.0.0.1:27017/farmMarket')
.then(()=>{
    console.log('MONGO Connected!!!!');
}).catch((err)=>{
    console.log('MONGO Failure!!!!'+err);
});

app.get("/products", async (req, res) => {
  let { category } = req.query;
  if (category) {
    const allProd = await Product.find({ category });
    res.render("products/index", { allProd, category });
  } else {
    const allProd = await Product.find({});
    res.render("products/index", { allProd, category:'All' });
  }
});

app.get('/products/new',(req,res)=>{
    res.render('products/new', {categories});
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

app.get('/products/:id/edit',async (req,res)=>{
    const { id } = req.params;
    const prod = await Product.findById(id);
    res.render('products/edit',{prod,categories});
});

app.put('/products/:id',async (req,res)=>{
    const { id } = req.params;
    const editedProd = await Product.findByIdAndUpdate(id,req.body,{runValidators: true, new: true});
    // console.log(editedProd);
    res.redirect(`/products/${editedProd._id}`);
});

app.delete('/products/:id',async (req,res)=>{
    const { id } = req.params;
    const prod = await Product.findByIdAndDelete(id);
    console.log(prod);
    res.redirect('/products');
});

app.listen(3000,()=>{
    console.log('Connected to 3000!!!');
});