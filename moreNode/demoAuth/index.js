const express = require('express');
const app = express();
const User = require('./models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
.then(()=>{
    console.log('Success!!!!');
}).catch((err)=>{
    console.log('Failure!!!!'+err);
});


app.set('view engine','ejs');
app.set('views','views');
const requireLogin = (req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect('/login');
    }
    next();
}
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:'IAMTHEPROBLEM',
    resave:false,
    saveUninitialized: true
}));

app.get('/',(req,res)=>{
    res.send('This is home');
});

app.get('/register',(req,res)=>{
    res.render('register');
});

app.get('/login',(req,res)=>{
    res.render('login');
});

app.post('/login', async(req,res)=>{
    const {username,password} = req.body;
    const user = await User.findAndvalidateUser(username,password);
    if(user) {
        req.session.user_id = user._id;
        return res.redirect('/secret');
    } else {
        return res.redirect('/login');
    }
});

app.post('/register', async(req,res)=>{
    const {username,password} = req.body;
    const hashedPass = await bcrypt.hash(password,12);
    const newUser = new User({username,password});
    await newUser.save();
    req.session.user_id = newUser._id;
    res.redirect('/');
});

app.post('/logout', async(req,res)=>{
    // req.session.user_id = null;
    req.session.destroy();
    res.redirect('/login');
});

app.get('/secret',requireLogin, (req,res)=>{
    res.render('secret');
});

app.get('/topsecret',requireLogin, (req,res)=>{
    res.send('bwaaahahahahhahaha!!!');
});

app.listen(3030,()=>{
    console.log('Connected to 3030');
})