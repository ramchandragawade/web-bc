// async func returns promise without creating promises
// async function hello() {

// }
// Throw & return with catch & then

// const sing = async()=>{
//     // throw new Error('BAAAAAHHHHHHH')
//     throw 'BAAAAAAAAA'
//     return 'LALALALALA';
// };

// sing().then(data=>{
//     console.log(data);
// }).catch(err=>console.log(err));


const login = async(uname,pass)=>{
    if(!uname || !pass) throw 'Missing creds';
    if(pass === 'Raaj') return `Welcome ${uname}`
    throw 'Invalid Pass';
}

login('sssss', 'Raaj').then(msg => {
    console.log('Logged in');
    console.log(msg);
}).catch(err => {
    console.log('Error');
    console.log(err);
});

login('ttttttt').then(msg=>{
    console.log('Logged in');
    console.log(msg);
}).catch(err => {
    console.log('Error');
    console.log(err);
});

login('rrrrrrr','Raaj').then(msg => {
    console.log('Logged in');
    console.log(msg);
}).catch(err => {
    console.log('Error');
    console.log(err);
});


//The pomises which were resolved are getting displayed first and failed ones are at the end