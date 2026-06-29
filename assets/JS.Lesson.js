//variables:
var x = 433333; //integer
var y = 4444.5; // double (float)
var z = "abc";// string

//writing:
document.writeln(x); //writes an int to the doc
document.writeln(z); //writes a stringto the doc

//updates:
x = x-1;
z = z + "1" // z = "abc1"
document.writeln(x); // writes the new x
document.writeln(z); // writes the new z

// if:
if (x%2==0 ) { // checks if x is even
    document,writeln("EVEN"); // if func
}
else{
    document.writeln("ODD"); // else func
}

// for loop:
let size = 4 // sets a variable to an int (or double) 
for(let i = 0;i<size;1){  // sets i to 0 (let i =0), every loop i increases i by 1 until i < size
    document.write(i); // loop content
}

// Input (promt):
let D = prompt("plaese insert a number"); // takes an input form the user (detects int double or str)

//Alert func: 
if (D%2==0 ) { // checks if x is even
    document,writeln("EVEN");
}
else{
    alert("number is odd"); //makes a jumping window with the text
}

//functions:
function Numcheck(){ //func "Numcheck" the takes user input and checks if it is ODD or EVEN
    let D = prompt("plaese insert a number"); 
    if (D%2==0 ) { 
        document,writeln("EVEN");
    }
    else{
        alert("number is odd");
    }
}

Numcheck(); // uses the func

// write an int as a div
document.writeln("<div id=Itest>"+x+"</div>"); // writes the var X
document.writeln("<div id=Itest>x</div>"); // writes "x"