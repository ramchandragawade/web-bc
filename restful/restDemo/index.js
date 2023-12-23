const express = require('express');
const app = express();
const path = require('path');
app.set('views',path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

const { v4: uuid} = require('uuid');
uuid();
var methodOverride = require('method-override')
app.use(methodOverride('_method'));
let comments = [
  { uname: "Raaj", comment: "Hi, this is Raaj", id: uuid() },
  { uname: "Carlos", comment: "Hi, I am Carlos Sainz, Smooth operatorrrrrr", id: uuid() },
  { uname: "Charles", comment: "I am Lord Percevallllll", id: uuid() },
  { uname: "Norris", comment: "Its friday then saturday sunday whatttt", id: uuid() }
];

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/comments',(req,res)=>{
    res.render('comments/index', {comments});
});

app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
});

app.get('/comments/:id',(req,res)=>{
    const { id } = req.params;
    const post = comments.find((c) => c.id === id);
    res.render('comments/show', {post});
});

app.delete('/comments/:id',(req,res)=>{
    const { id } = req.params;
    comments = comments.filter((c) => c.id !== id);
    res.redirect('/comments');
});

app.get('/comments/:id/edit',(req,res)=>{
    const { id } = req.params;
    const post = comments.find((c) => c.id === id);
    res.render('comments/edit', {post});
});

app.post('/comments',(req,res)=>{
    const {uname,comment} = req.body;
    comments.push({uname,comment, id:uuid()});
    // res.send('It worked: '+{uname,comment});
    res.redirect('/comments');
});

app.patch('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const newComment = req.body.comment;
    const post = comments.find(itm=>itm.id===id);
    post.comment = newComment;
    res.redirect('/comments')
});

app.get('/burger', (req, res) => {
    console.log(req.query);
    res.send('GET /burger response');
});

app.post('/burger', (req,res)=>{
    const {type,qty} = req.body;
    res.send(`<b>POST /burger response</b><br><i>Burger Name:${type}, Quantity:${qty}</i>`);
});

app.listen(3000,()=>{
    console.log('On port 3000');
});

/*
GET /comments - list all
POST /comments - create a new comment
GET /comments/:id - get one comment
PATCH /comments/:id - update one comment
DELETE /comments/:id - delete
*/