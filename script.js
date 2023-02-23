 var num = document.getElementById("num");
 var btn = document.getElementById("btn");
 var main = document.getElementById("main");
// // array
 var array = ["red", "blue", "black","pink", "white","grey", "yellow","orange", "green"];

 function changeNumber() {
    // let randomNum = Math.floor(Math.random() * 100);
    // num.innerHTML = randomNum;

    let randomColor = Math.floor(Math.random() * array.length);
    document.body.style.background = array[randomColor];
    num.style.color = array[randomColor]
    

 } 
// var numb = document.getElementById("#num");
// var button = document.getElementById("#btn");
// var array = ["red", "blue", "pink", "purple"];

// function getNumber(){
//     let randonNum = Math.floor(Math.random * 100);
//     numb.innerHTML = randonNum;
// }


