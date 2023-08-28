// setTimeout(function(){
//     document.body.style.backgroundColor = 'voilet';
//     setTimeout(function () {
//         document.body.style.backgroundColor = 'indigo';
//         setTimeout(function () {
//             document.body.style.backgroundColor = 'blue';
//             setTimeout(function () {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(function () {
//                     document.body.style.backgroundColor = 'yellow';
//                     setTimeout(function () {
//                         document.body.style.backgroundColor = 'orange';
//                         setTimeout(function () {
//                             document.body.style.backgroundColor = 'red';
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// },1000);

function delayedColorChange(newColor,delay, doNext) {
    setTimeout(function () {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay);
}

delayedColorChange('red',1000, function(){
    delayedColorChange('orange', 1000, function (){
        delayedColorChange('blue', 1000, function () {
            delayedColorChange('green', 1000, function () {
                delayedColorChange('yellow', 1000, function () {

                });   
            });
        });
    });
});

// Example of CB Hell
// searchMoviesApi('amadeus', function(){
//     saveToMyDB(movies, function(){
//         //success func
//     }, function(){
//         //failure func
//     });
// }, function (){
//     //unable to connect
// });