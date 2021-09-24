var myheader = document.querySelector("h1");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(){
  colorIn = getRandomColor();
    mheader.style.color = colorIn;
}

setInterval("changeColor()",500);










// var first = prompt("Enter first name");
// var last =  prompt("Enter Last name");
//
// var age =  prompt("Enter age");
//
// var height =  prompt("Enter height");
//
// var pet =  prompt("Enter pet name");
//
// alert("Thank you so much for the info...");
// var namec;
// var agec;
// var heightc;
// var petc;
//
//
// if(first[0] === last[0]){
//   namec = true;
// }
// else {
//   namec = false;
// }
//
//
// if(age>= 20 && age <= 30){
//   agec = true;
// }
// else {
//   agec = false;
// }
// if(pet[pet.length-1] ==='y'){
//   petc = true;
// }
//
// if(agec && petc && namec ){
//   console.log("Welcome spy");
// }
