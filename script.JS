let scoreDisplay = document.getElementById('score');
let grid = document.getElementById('grid');
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1; 
let appleIndex = 0;
let score = 0;
let timerId = 0;
let intervalTime = 200;
let gameOn = true;

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
    clearInterval(timerId); //waits for timerId (0)s
    currentSnake=[2,1,0];
    score = 0;
    direction = 1;
    intervalTime = 200;
    scoreDisplay.textContent = score;
    currentSnake.forEach(index => squares[index].classList.add('snake'));
    generateApple();
    timerId = setInterval(move, intervalTime);
}




function endGame(){
        clearInterval(timerId);
}
function move(){ //  moving and collision
    //collision alg:
    const hitBottom = (currentSnake[0] +20>=400 && direction === 20); //checks the snake's head (number 0 in the array) and sees if it is the last place before the floor (<= 380)
    const hitTop = (currentSnake[0] <20 && direction === -20);
    const hitRight = (currentSnake[0]%20 === 19 && direction === 1); // checks if the head is on the right collumn (because the right collumn contains 39, 59, 79...)
    const hitLeft = (currentSnake[0]%20 === 0 && direction === -1);
    const hitSelf = squares[currentSnake[0]+ direction]?.classList.contains('snake'); // checks if the snake's head + dir equals to a place with a snake

    if(hitRight || hitBottom || hitTop || hitLeft || hitSelf){
        return  endGame();
    }
           //moving alg
    let newHead = currentSnake[0]+direction; // makes a head in the original head spot and adds the dir to create the new head
    const tail = currentSnake.pop();
    squares[tail].classList.remove('snake'); //removes it from the grids
    squares[newHead].classList.add('snake'); //adds the head to the grid

    currentSnake.unshift(newHead);// adds the head to the snake (adds it to the array)

    if (squares[newHead].classList.contains('apple')){ //checks if the snake overlaps with the apple
        squares[newHead].classList.remove('apple');
        squares[tail].classList.add('snake'); //adds the new snake body to the grid
        currentSnake.push(tail); //adds a new part to the tail
        score++;
        scoreDisplay.textContent = score;
        intervalTime = intervalTime *(2/score);
        generateApple();
    }
   

        //touch controlls
    document.addEventListener('touchstart', e =>{ //first position
        touchStartX = e.changeTouches[0].screenX;
        touchStartY= e.changeTouches[0].screenY;
    }, false);

    document.addEventListener('touchend', e => {// second position
        touchEndX = e.changeTouches[0].screenX;
        touchEndY = e.changeTouches[0].screenX;
        handleSwipe(); 
    }, false);
}

function generateApple(){
    do{
        appleIndex = Math.floor(Math.random() * squares.length); // takes a random number(0<= n <1) and multuplies it by 400 to get a place
    } while (squares[appleIndex].classList.contains('snake'));// while the random place is not on a snake part (or he ate it or the apple generated on the snake)
    squares[appleIndex].classList.add('apple');
}


function changeDir(newDir){ //takes the new direction
    if(direction +newDir !==0) { // checks if the snakes id reversing
        direction = newDir; //writes the new direction
    }
}

document.addEventListener('keydown', e =>{ // listens to the keyboard and checks if keys are pressed
    if (e.key === 'ArrowUp') changeDir(-20);
    if (e.key === 'ArrowDown') changeDir(20);
    if (e.key === 'ArrowLeft') changeDir(-1);
    if (e.key === 'ArrowRight') changeDir(1);
});



function handleSwipe(){
    const dx = touchEndX - touchStartX;
    const dy = touchEndY - touchEndY;

    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if(Math.max(absDx, absDy) >30) { //checks if the move is big enough to count
        if(absDx > absDy) {
            if (dx > 0) changeDir(-1) //right
            if(dx <0) changeDir(1) //Left
        } else {
            if (dy >0) changeDir(20); // down
            if (dy <0) changeDir(-20); // up  
        }
    }
}

