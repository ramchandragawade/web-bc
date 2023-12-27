const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    if(req.query.isAdmin){
        return next();
    }
    res.send('Sorry not an admin');
});

router.get('/secret',(req,res)=>{
    res.send('GOTTA SECRETTTTTTT');
});

router.get('/deleteAll',(req,res)=>{
    res.send('Everything gone');
});

module.exports = router;