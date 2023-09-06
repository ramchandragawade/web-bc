const express = require('express');
const app = express();
// console.log(app);

app.use((req, res)=>{
    console.log('Yo new request');
    // console.dir(req);
    // res.send('Hi, got the request');
    // res.send({color: 'red'});
    res.send('<h1>Hi, got the request</h1>');
})

app.listen(8080,()=>{
    console.log('Listening on port 8080');
})
