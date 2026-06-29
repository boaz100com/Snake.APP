let X = prompt("Enter Integer");
document.writeln("<div id= sqrti>"+Math.sqrt(X)+"</div>"); // squre root

if((X*X)%2==0){ //checks if X squred is Even
    document.writeln("<div id= sqi>Sq Number Is Even</div>");
}
else{
    document.writeln("<div id= sqi>Sq Number Is ODD</div>");
}