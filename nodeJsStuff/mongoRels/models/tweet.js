const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.connect('mongodb://127.0.0.1:27017/relDemo')
.then(()=>{
    console.log('Success!!!!');
}).catch((err)=>{
    console.log('Failure!!!!'+err);
});

const userSchema = new Schema({
    username: String,
    age: Number
});
const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const User = mongoose.model('User',userSchema);
const Tweet = mongoose.model('Tweet',tweetSchema);

const makeTweet = async ()=>{
    // const u = new User({ username:'raajgawade', age:28 });
    const u = await User.findOne({username:'raajgawade'});
    const twt1 = new Tweet({text:'Pessi<<<<<Ronaldo', likes:1000});
    twt1.user = u;
    // u.save();
    twt1.save();
}
// makeTweet();

const findTweet = async()=>{
    const t = await Tweet.find({}).populate('user','username');
    console.log(t);
}
findTweet();