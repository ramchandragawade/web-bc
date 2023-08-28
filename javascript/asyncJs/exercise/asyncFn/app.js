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



//The pomises which were resolved are getting displayed first and failed ones are at the end

// const login = async(uname,pass)=>{
//     if(!uname || !pass) throw 'Missing creds';
//     if(pass === 'Raaj') return `Welcome ${uname}`
//     throw 'Invalid Pass';
// }

// login('sssss', 'Raaj').then(msg => {
//     console.log('Logged in');
//     console.log(msg);
// }).catch(err => {
//     console.log('Error');
//     console.log(err);
// });

// login('ttttttt').then(msg=>{
//     console.log('Logged in');
//     console.log(msg);
// }).catch(err => {
//     console.log('Error');
//     console.log(err);
// });

// login('rrrrrrr','Raaj').then(msg => {
//     console.log('Logged in');
//     console.log(msg);
// }).catch(err => {
//     console.log('Error');
//     console.log(err);
// });


function delayedColorChange(newColor, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            document.body.style.backgroundColor = newColor;
            resolve()
        }, delay);
    });
}

// delayedColorChange('violet', 1000)
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('red', 1000));

//ASync await

// async function rainbow(){
//     await delayedColorChange('violet', 1000);
//     await delayedColorChange('indigo', 1000);
//     await delayedColorChange('blue', 1000);
//     await delayedColorChange('green', 1000);
//     await delayedColorChange('yellow', 1000);
//     await delayedColorChange('orange', 1000);
//     await delayedColorChange('red', 1000);
//     return 'All Done'
// }
// rainbow().then((data)=>console.log(data));


//Handling rejection/errors
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 3000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoReq(){
    try {

        let data1 = await fakeRequestPromise('/page1');
        let data2 = await fakeRequestPromise('/page2');
        console.log(data1);
        console.log(data2);
    } catch (error) {
        console.log('ERRORRRR:',error);
    }
}
makeTwoReq();