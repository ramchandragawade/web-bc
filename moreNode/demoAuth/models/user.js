const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'Username cannot be empty']
    },
    password:{
        type: String,
        required: [true,'Password cannot be empty']
    }
});
userSchema.statics.findAndvalidateUser= async function(username,password){
    const user = await this.findOne({username});
    if(!user){
        return false;
    }
    const isCorrectPass = await bcrypt.compare(password,user.password);
    return isCorrectPass ? user : false;
}
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password,12);
    next();
});
module.exports = mongoose.model('User',userSchema);