const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogsRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');
app.use('/shelters',shelterRoutes);
app.use('/dogs',dogsRoutes);
app.use('/admin',adminRoutes);

app.get('/',(req,res)=>{
    res.send('Home!!!');
});

app.listen(3000,()=>{
    console.log('Connected to 3000');
})