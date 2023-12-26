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

const addAddress = async(id) =>{
    const user = await User.findById(id);
    if(user){
        user.address.push({
            street: '6 Street',
            city: 'London',
            state: 'Londo',
            country: 'UK'
        });
    } else {
        console.log('User not found');
    }
    const res = await user.save();
    console.log(res);
}
// makeUser();
addAddress('658b543bde23ff19c47baafb');