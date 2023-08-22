// document.querySelector('button').addEventListener('click',function(e){
//     console.log(e);
// });

const input = document.querySelector('input');
input.addEventListener('keydown',function(e){
    // console.log('Key down!');
    console.log(e);
    console.log(e.key); //actual input
    console.log(e.code); //code of key (KeyA,ShiftLeft)
});

// input.addEventListener('keyup',function(){
//     console.log('Key up!');
// });

window.addEventListener('keydown',function(e){
    // console.log(e.key); //actual input
    // console.log(e.code); //code of key (KeyA,ShiftLeft);
    switch (e.code) {
      case "ArrowUp":
        console.log("UP!");
        break;
      case "ArrowDown":
        console.log("DOWN!");
        break;
      case "ArrowLeft":
        console.log("LEFT!");
        break;
      case "ArrowRight":
        console.log("RIGHT!");
        break;
      default:
        console.log("IGNORED!");
    }
});