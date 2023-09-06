const express = require('express');
const app = express();
// console.log(app);

// app.use((req, res)=>{
//     console.log('Yo new request');
//     // console.dir(req);
//     // res.send('Hi, got the request');
//     // res.send({color: 'red'});
//     res.send('<h1>Hi, got the request</h1>');
// })

app.get('/',(req,res)=>{
    res.send('Home Page');
})

app.get('/cats',(req,res)=>{
    res.send('Meowwwrrr');
})

app.post('/cats',(req,res)=>{
    res.send('Meowwwrrr but from POST');
})

app.get('/dogs',(req,res)=>{
    res.send('Wooofffff');
})

app.get('*',(req,res)=>{
    res.send('Route does not exist');
})


app.listen(8080,()=>{
    console.log('Listening on port 8080');
})
