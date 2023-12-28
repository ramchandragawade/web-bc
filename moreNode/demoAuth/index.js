const express = require('express');
const app = express();
const User = require('./models/user');
const bcrypt = require('bcrypt');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
.then(()=>{
    console.log('Success!!!!');
}).catch((err)=>{
    console.log('Failure!!!!'+err);
});


app.set('view engine','ejs');
app.set('views','views');

app.use(express.urlencoded({extended:true}));


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
    const user = await User.findOne({username:username});
    if(!user){
        res.send('Incorrect username or password');
    }
    const isCorrectPass = await bcrypt.compare(password,user.password);
    if(isCorrectPass) {
        res.send('Welcome '+user.username);
    } else {
        res.send('Incorrect username or password');
    }
});

app.post('/register', async(req,res)=>{
    const {username,password} = req.body;
    const hashedPass = await bcrypt.hash(password,12);
    const newUser = new User({
        username: username,
        password: hashedPass
    });
    await newUser.save();
    res.redirect('/');
});

app.get('/secret',(req,res)=>{
    res.send('GOT A SECRET CAN YOU KEEP IT!!!!');
});

app.listen(3030,()=>{
    console.log('Connected to 3030');
})