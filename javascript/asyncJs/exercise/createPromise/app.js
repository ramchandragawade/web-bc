//Create and call promises
// const fakeReq = (url) => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve();
//         }, 1000);
//     });
// }

// fakeReq('books').then((data)=>{
//     console.log(data);
//     console.log('success');
// }).catch(err=>{
//     console.log('Failed');
//     console.log(err);
// });

//older funcs ---

// function delayedColorChange(newColor,delay, doNext) {
//     setTimeout(function () {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay);
// }

// delayedColorChange('red',1000, function(){
//     delayedColorChange('orange', 1000, function (){
//         delayedColorChange('blue', 1000, function () {
//             delayedColorChange('green', 1000, function () {
//                 delayedColorChange('yellow', 1000, function () {

//                 });   
//             });
//         });
//     });
// });

//new with promises----


function delayedColorChange(newColor, delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            document.body.style.backgroundColor = newColor;
            resolve()
        }, delay);
    });
}

delayedColorChange('violet', 1000)
    .then(()=>delayedColorChange('indigo',1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('red', 1000));
