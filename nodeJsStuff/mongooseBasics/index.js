const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/moviesDB')
.then(()=>{
    console.log('Success!!!!');
}).catch((err)=>{
    console.log('Failure!!!!'+err);
});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console,'Connection error'));
// db.once('open', function(){
//     console.log('Success.')
// })