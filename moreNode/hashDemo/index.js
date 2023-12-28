const bcrypt = require('bcrypt');

// const hashPass = async(pw)=>{
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw,salt);
//     console.log('salt:'+salt);
//     console.log('hash:'+hash);
// }

const hashPass = async(pw)=>{
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(pw,salt);
    console.log('salt:'+salt+' :length:'+salt.length);
    console.log('hash:'+hash+' :length:'+hash.length);
}

const login = async(pw,hashedPass)=>{
    const res = await bcrypt.compare(pw,hashedPass);
    res ? console.log('Success'):console.log('Failure');
}

hashPass('monkey');
login('monkey','$2b$12$xKCNbWh6bSiCPXrOkFicx.0fGQk26DPHHZtQopaHZ5GviiIWUOx/i');