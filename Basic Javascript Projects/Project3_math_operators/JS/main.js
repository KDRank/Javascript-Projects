
function addition_Function() { //Addition
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}
function subtraction_Function() { //Subtraction
    var Subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + Subtraction;
}
function multiplication() { //Multiplication
    var simple_Math1 = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_Math1;
}
function division() { //Division
    var simple_Math2 = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + simple_Math2;
}
function more_Math() { //Multiple Operations
    var simple_Math3 = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = "1 + 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math3;
}
function modulus_Operator() { //Modulus Operator
    var simple_Math4 = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math4;
}
function negation_Operator(){ //Negation Operator
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}
var Y = 5;
Y++;
document.write("<br>5 increased by 1 is " + Y); //Increment Operator

var Z = 5.25;
Z--;
document.write("<br>5.25 decreased by 1 is " + Z); //Decrement Operator
window.alert(Math.random()); //Displays alert with random number between 0 and 1
window.alert(Math.random() * 100); //Displays alert with random number between 0 and 100
let Q = Math.PI;//Returns PI
document.write("<br>Approximate value of PI is " + Q);
let W = Math.sqrt(16); //Returns square root
document.write("<br>Square root of 16 is " + W)
document.write("<br>Random number between 0 - 50 is " + Math.random() * 50);//Displays random number between 0 and 50