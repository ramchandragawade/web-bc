const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'IAMRAM',
    resave: false,
    saveUninitialized: false
}));

app.get('/register',(req,res)=>{
    const {username = 'unknown'} = req.query;
    req.session.username = username;
    res.redirect('/greet');
});

app.get('/greet',(req,res)=>{
    const {username = 'unknown'} = req.session;
    res.send('Welcome back '+ username);
});

app.get('/viewcount',(req,res)=>{
    if(req.session.count){
        req.session.count+=1;
    } else {
        req.session.count=1;
    }
    res.send(`You have viewed the page ${req.session.count} times.`);
});

app.listen(3000,()=>{
    console.log('Connected to 3000');
})