const express = require('express');
const app = express();
const path = require('path');
app.set('views', path.join(__dirname,'/views'));
app.set('view engine','ejs');
const methodOverride = require('method-override');
const AppError = require('./AppError');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

const mongoose = require('mongoose');
const Product = require('./models/product');
const { log } = require('console');

const categories = ['fruit', 'veggie', 'dairy'];

mongoose.connect('mongodb://127.0.0.1:27017/farmMarket2')
.then(()=>{
    console.log('MONGO Connected!!!!');
}).catch((err)=>{
    console.log('MONGO Failure!!!!'+err);
});

app.get("/products", async (req, res, next) => {
    try {
        let { category } = req.query;
        if (category) {
          const allProd = await Product.find({ category });
          res.render("products/index", { allProd, category });
        } else {
          const allProd = await Product.find({});
          res.render("products/index", { allProd, category:'All' });
        }      
    } catch(e) {
        next(e);
    }
});

app.get('/products/new',(req,res)=>{
    // throw new AppError('Not allowed',401);
    res.render('products/new', {categories});
});

app.post('/products',async (req,res,next)=>{
    try {
        const newProd = new Product(req.body);
        await newProd.save();
        // console.log(newProd);
        res.redirect('/products');
    } catch(e) {
        next(e);
    }
});

app.get('/products/:id',async (req,res,next)=>{
    try {
        const { id } = req.params;
        const prod = await Product.findById(id);
        // console.log(prod);
        // res.send('Details page');
        // throw new AppError('Not allowed',401);
        if(!prod) {
            throw new AppError('Product not found', 404);
        }
        res.render('products/show',{prod});    
    } catch(e) {
        next(e);
    }
});

app.get('/products/:id/edit',async (req,res,next)=>{
    try {
        const { id } = req.params;
        const prod = await Product.findById(id);
        if(!prod) {
            throw new AppError('Product not found', 404);
        }
        res.render('products/edit',{prod,categories});    
    } catch(e) {
        next(e);
    }
});

app.put('/products/:id',async (req,res,next)=>{
    try {
        const { id } = req.params;
        const editedProd = await Product.findByIdAndUpdate(id,req.body,{runValidators: true, new: true});
        res.redirect(`/products/${editedProd._id}`);    
    } catch(e){
        next(e);
    }
});

app.delete('/products/:id',async (req,res)=>{
    const { id } = req.params;
    const prod = await Product.findByIdAndDelete(id);
    console.log(prod);
    res.redirect('/products');
});

app.use((err,req,res,next)=>{
    const {status=500,message='Something went wrong'} = err;
    res.status(status).send(message);
});

app.listen(3000,()=>{
    console.log('Connected to 3000!!!');
});