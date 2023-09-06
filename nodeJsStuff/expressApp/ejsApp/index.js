const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'));

app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/random',(req,res)=>{
    const num = Math.floor(Math.random()*10) + 1;
    res.render('random',{ rNum : num });
});

app.listen(8080,()=>{
    console.log('Listening on port');
});