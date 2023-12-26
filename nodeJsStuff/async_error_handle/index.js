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

function wrapAsync(fn,req,res,next){
    return function(req,res,next) {
        console.log('In wrapper',req.params);
        fn(req,res,next).catch(e=>next(e));
    }
}


app.get("/products",wrapAsync( async (req, res, next) => {
    let { category } = req.query;
    if (category) {
      const allProd = await Product.find({ category });
      res.render("products/index", { allProd, category });
    } else {
      const allProd = await Product.find({});
      res.render("products/index", { allProd, category:'All' });
    }
}));

app.get('/products/new',(req,res)=>{
    // throw new AppError('Not allowed',401);
    res.render('products/new', {categories});
});

app.post('/products',wrapAsync(async (req,res,next)=>{
    const newProd = new Product(req.body);
    await newProd.save();
    res.redirect('/products');
}));


app.get('/products/:id', wrapAsync(async (req,res,next)=>{
    const { id } = req.params;
    const prod = await Product.findById(id);
    if(!prod) {
        throw new AppError('Product not found', 404);
    }
    res.render('products/show',{prod});
}));

app.get('/products/:id/edit',wrapAsync(async (req,res,next)=>{
    const { id } = req.params;
    const prod = await Product.findById(id);
    if(!prod) {
        throw new AppError('Product not found', 404);
    }
    res.render('products/edit',{prod,categories}); 
}));

app.put('/products/:id',wrapAsync(async (req,res,next)=>{
    const { id } = req.params;
    const editedProd = await Product.findByIdAndUpdate(id,req.body,{runValidators: true, new: true});
    res.redirect(`/products/${editedProd._id}`);   
}));

app.delete('/products/:id',wrapAsync(async (req,res,next)=>{
    const { id } = req.params;
    const prod = await Product.findByIdAndDelete(id);
    console.log(prod);
    res.redirect('/products');
}));

app.use((err,req,res,next)=>{
    const {status=500,message='Something went wrong'} = err;
    res.status(status).send(message);
});

app.listen(3000,()=>{
    console.log('Connected to 3000!!!');
});