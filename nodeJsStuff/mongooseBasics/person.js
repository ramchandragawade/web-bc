const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/personDB')
.then(()=>{
    console.log('Success!!!!');
}).catch((err)=>{
    console.log('Failure!!!!'+err);
});

const personSchema = new mongoose.Schema({
    fname: String,
    lname: String
});
personSchema.virtual('fullName').get(function(){
    return `${this.fname} ${this.lname}`
});

personSchema.pre('save',async function(){
    this.fname = 'Yo';
    this.lname = 'Mama';
    console.log('About to save');
});

personSchema.post('save',async function(){
    console.log('Saved');
});



const Person = mongoose.model('Person', personSchema);

const t = new Person({fname:'Charles', lname:'Leclerc'});
console.log(t.fullName);