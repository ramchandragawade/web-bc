const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use((req,res,next)=>{
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use('/dogs',(req,res,next)=>{
    console.log('catsssss');
    next();
});

const verifyPass = (req, res, next) => {
    const { pass } = req.query;
    if (pass === 'raaj123') {
        next();
    } else {
        res.send('Cannot access this');
    }
}
app.get('/secret',verifyPass,(req,res)=>{
    res.send('Got a secret, can you keep it!!!!');
});

// app.use((req,res,next)=>{
//     const {pass} = req.query;
//     if(pass === 'raaj123'){
//         next();
//     } else {
//         res.send('Cannot access this');
//     }
// });


// app.use((req,res,next)=>{
//     console.log('In 1 use...');
//     next();
//     console.log('In 1 use but after...');
// });

// app.use((req,res,next)=>{
//     console.log('In 2 use...');
//     return next();
//     console.log('In 2 use but after...');
// });

app.get('/',(req,res)=>{
    console.log(`Request time: ${req.requestTime}`);
    res.send('Home');
});

app.get('/dogs',(req,res)=>{
    res.send('DOGOGOGOGOGOG');
})

app.use((req,res)=>{
    res.status(404).send('NOT FOUND');
});

app.listen(3000,()=>{
    console.log('App is running on 3000');
});