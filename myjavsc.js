/// restart
var restart = document.querySelector('#b');


// grab squre
var squares = document.querySelectorAll('td')


//clear all

function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click', clearBoard);


function changeMaker(){
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }
  else {
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMaker)
}














// var cellOne = document.querySelector('#one');
//
// cellOne.addEventListener('click',function(){
//   if ( cellOne.textContent === '') {
//         cellOne.textContent = 'X';
//   }else if (cellOne.textContent === 'X') {
//     cellOne.textContent = 'O';
//   }else {
//     cellOne.textContent = '';
//   }
// })
