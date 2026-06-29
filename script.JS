let scoreDi = document.getElementByID('score')
let grid = doucument.getElementByID('grid');
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1; 
let appleIndex = 0;
let score = 0;
let timerId = 0;
let intervalTime = 200;


function CreateBoard(){
    for(let i =0; i<400; i++){ //this loop adds the squares to the grid
        const square = // creates a square const
        document.createElement('div'); // makes a place holder in the grid
        grid.appendChild(square); // adds the square to the place holder
        squares.push(square); // saves the squares to the array in the JS
    }
}
CreateBoard();
