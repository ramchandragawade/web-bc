const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Dogs all');
});

router.post('/',(req,res)=>{
    res.send('Create dog');
});

router.get('/:id',(req,res)=>{
    res.send('1 dog : '+ req.params.id);
});

router.get('/:id/edit',(req,res)=>{
    res.send('Edit 1 dog : '+ req.params.id);
});

module.exports = router;