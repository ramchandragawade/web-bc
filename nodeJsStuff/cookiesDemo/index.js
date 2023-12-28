const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser('secretkey'));

app.get('/greet',(req,res)=>{
    const {name='Anony'} = req.cookies;
    res.send('Hiiiiiiii '+name);
});

app.get('/setname',(req,res)=>{
    res.cookie('name','Raaj');
    res.cookie('domain','greeeeeet');
    res.send('Sent cookie')
});

app.get('/getSignedCookie',(req,res)=>{
    res.cookie('fruit','mango',{signed: true});
    res.send('Fruit cookie sent');
});

app.get('/verifyfruit',(req,res)=>{
    console.log(req.cookies);
    res.send(req.signedCookies)
});

app.listen(3000, ()=>{
    console.log('Connected to 3000');
});