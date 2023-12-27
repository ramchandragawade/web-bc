const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/greet',(req,res)=>{
    const {name='Anony'} = req.cookies;
    res.send('Hiiiiiiii '+name);
});

app.get('/setname',(req,res)=>{
    res.cookie('name','Raaj');
    res.cookie('domain','greeeeeet');
    res.send('Sent cookie')
});

app.listen(3000, ()=>{
    console.log('Connected to 3000');
});