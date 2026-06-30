let scoreDi = document.getElementById('score');
let grid = document.getElementById('grid');
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

function startGame(){
    currentSnake.forEach(index => squares[index].classList.remove('snake')); //removes the snake
    squares[appleIndex].classList.remove('apple'); // removes the apple
    clearInterval(timerId); //waits for timerId (0)
}

startGame();

function move(){ //  moving and collision
        //moving alg
    const newHead = currentSnake[0]+direction; // makes a head in the original head spot and adds the dir to create the new head
    currentSnake.unshift(newHead);// adds the head to the snake (adds it to the array)
    squares[newHead].classList.add('snake'); //adds the head to the grid

    const tail = currentSnake.pop();
    squares[tail].classList.remove('snake'); //removes it from the grid


    //collision alg:
    const hitBottom = (currentSnake[0] +20>=400 && direction === 20); //checks the snake's head (number 0 in the array) and sees if it is the last place before the floor (<= 380)
    const hitTop = (currentSnake[0] <20 && direction === -20);
    const hitRight = (currentSnake[0]%20 === 19 && direction === 1); // checks if the head is on the right collumn (because the right collumn contains 39, 59, 79...)
    const hitLeft = (currentSnake[0]%20 === 0 && direction === -1);
    const hitSelf = squares[currentSnake[0]+ direction]?.classList.contains('snake'); // checks if the snake's head + dir equals to a place with a snake
}

function generateApple(){
    do{
        appleIndex = Math.floor(Math.random() * squares.length); // takes a random number(0<= n <1) and multuplies it by 400 to get a place
    } while (squares[appleIndex].classList.contains('snake'));// while the random place is not on a snake part (or he ate it or the apple generated on the snake)
    squares[appleIndex].classList.add('apple');
}

generateApple();

function changeDir(newDir){ //takes the new direction
    if(direction +newDir !==0) { // checks if the snakes id reversing
        direction = newDir; //writes the new direction
    }
}

document.addEventListener('keydown', (e) =>{ // listens to the keyboard and checks if keys are pressed
    if (e.key === 'ArrowUp') changeDir(-20);
    if (e.key === 'ArrowDown') changeDir(20);
    if (e.key === 'ArrowLeft') changeDir(-1);
    if (e.key === 'ArrowRight') changeDir(1);
});

//Game Loop:
setInterval(move,200);// every 200 ms the computer calls the func move

