const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('All shelters');
});

router.post('/',(req,res)=>{
    res.send('Creating shelter:'+req.body);
});

router.get('/:id',(req,res)=>{
    res.send('One shelters:'+req.params.id);
});

router.get('/:id/edit',(req,res)=>{
    res.send('Edit a shelter:'+req.params.id);
});

module.exports = router;