const express = require('express');
const app = express();
const path = require('path');
app.set('views', path.join(__dirname,'/views'));
app.set('view engine','ejs');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');

app.use(session({
    secret: 'IAMRAM',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

const Product = require('./models/product');
const Farm = require('./models/farm');
const { log } = require('console');

const categories = ['fruit', 'veggie', 'dairy'];

mongoose.connect('mongodb://127.0.0.1:27017/flashDemo')
.then(()=>{
    console.log('MONGO Connected!!!!');
}).catch((err)=>{
    console.log('MONGO Failure!!!!'+err);
});

//Farm routes
app.get("/farms", async (req, res) => {
    const allFarms = await Farm.find({});
    res.render("farms/index", { allFarms,messages:req.flash('success') });
});

app.get('/farms/new', (req, res) => {
    res.render('farms/new');
});

app.post('/farms',async(req,res)=>{
    const newFarm = new Farm(req.body);
    await newFarm.save();
    req.flash('success','Farm created');
    res.redirect('/farms');
});
app.get('/farms/:id',async (req,res)=>{
    const { id } = req.params;
    const farm = await Farm.findById(id).populate('products');
    res.render('farms/show',{farm});
});

app.get('/farms/:id/products/new',async(req,res)=>{
    const {id} = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', {categories,farm});
});

app.post('/farms/:id/products',async(req,res)=> {
    const newProd = new Product(req.body);
    const {id} = req.params;
    const farm = await Farm.findById(id);
    farm.products.push(newProd);
    newProd.farm = farm;
    await farm.save();
    await newProd.save();
    res.redirect('/farms/'+id);
});

app.delete('/farms/:id',async (req,res)=>{
    const { id } = req.params;
    const farm = await Farm.findByIdAndDelete(id);
    res.redirect('/farms');
});
  
//Product routes
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
    const prod = await Product.findById(id).populate('farm');
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

app.listen(3030,()=>{
    console.log('Connected to 3030!!!');
});