const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/relDemo')
.then(()=>{
    console.log('Success!!!!');
}).catch((err)=>{
    console.log('Failure!!!!'+err);
});

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    address:[{
        _id: {_id:false},
        street: String,
        city: String,
        state: String,
        country: String
    }]
});

const User = mongoose.model('User',userSchema);
const makeUser= async()=>{
    const n = new User({
        firstName: 'Harry 2',
        lastName: 'Potter 2'
    });
    n.address.push({
        street: 'Hogwarts',
        city: 'Dublin',
        state: 'Middles',
        country: 'UK'
    });
    const res = await n.save();
    console.log(res);
}
makeUser();