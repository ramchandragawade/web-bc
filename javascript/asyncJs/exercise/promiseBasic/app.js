// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

//Callback fakereq, cbhell
// fakeRequestCallback('books.com', function(response){
//     console.log('IT WORKED!!!!')    
//     console.log(response);
//     fakeRequestCallback('books.com/page2', function (response) {
//         console.log('IT WORKED AGAIN!!!!')
//         console.log(response);
//         fakeRequestCallback('books.com/page3', function (response) {
//             console.log('3rd request worked!!!!')
//             console.log(response);
//         }, function (error) {
//             console.log('ERROR on 3rd page!!!!');
//             console.log(error);
//         });
//     }, function (error) {
//         console.log('ERROR on 2nd page!!!!');
//         console.log(error);
//     });
// },function(error){
//     console.log('ERROR!!!!');
//     console.log(error);
// });


//fakeReq with promise

// fakeRequestPromise('books').then(function(data){
//     console.log('It worked P1');
//     console.log(data);
//     fakeRequestPromise('books/p2').then(function (data) {
//         console.log('It worked P2');
//         console.log(data);
//         fakeRequestPromise('books/p3').then(function (data) {
//             console.log('It worked P3');
//             console.log(data);
//         }).catch(function (e) {
//             console.log('P3 Failed');
//             console.log(e);
//         })
//     }).catch(function (e) {
//         console.log('P2 Failed');
//         console.log(e);
//     })
// }).catch(function(e){
//     console.log('P1 Failed');
//     console.log(e);
// });

fakeRequestPromise('books').then(data=>{
    console.log('It worked P1.')
    console.log(data);
    return fakeRequestPromise('books/p2');
}).then(data=>{
    console.log('It worked P2.')
    console.log(data);
    return fakeRequestPromise('books/p3');
}).then(data => {
    console.log('It worked P3.')
    console.log(data);
//    return fakeRequestPromise('books/p3');
}).catch(e=>{
    console.log('Error')
    console.log(e);
});