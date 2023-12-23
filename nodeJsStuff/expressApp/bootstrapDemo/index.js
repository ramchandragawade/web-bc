const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/',(req,res)=>{
    res.render('home.ejs', {name:'Home'});
})

app.get('/rand',(req,res)=>{
    const num = Math.floor(Math.random() *10) + 1;
    res.render('random.ejs', {num, rand:num+1, name:'Random Number'});
})

app.get('/cats',(req,res) => {
    const cats = ['Lily', 'Leo', 'Love','Luca', 'Lucy'];
    res.render('cats', {cats,name:'Cats'});
})

app.get('/r/:subreddit',(req,res)=>{
    const { subreddit } = req.params;
    const data = redditData[subreddit.toLowerCase()];
    if(data){
        res.render('subreddit', {...data});
    } else {
        res.render('notfound', {subreddit,name:'Not Found'});
    }
})

app.listen(8080,()=>{
    console.log('Listening on port 8080');
})