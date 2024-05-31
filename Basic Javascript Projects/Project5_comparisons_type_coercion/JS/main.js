document.write(typeof "Word"); //'Type Of' operator for string
document.write("<br>" + typeof 3) //'Type Of' operator for number
document.write("<br>10" + 5 + "<br>"); //Type Coercion
document.write(2E310); //Displays infinity
document.write("<br>"); //Line break
document.write("This is " + -3E310); //Displays -infinity with string
document.write("<br>"); //Line break
document.write(10>2); //Boolean Greater-Than Comparison Display True
document.write("<br>"); //Line break
document.write(10<2); //Boolean Less-Than Comparison Display False
document.write("<br>"); //Line break
document.write(10 == 10); // Boolean Equals Comparison Display True
document.write("<br>"); //Line break
document.write(3 == 11); //Boolean Equals Comparison Display False
document.write("<br>"); //Line break

    X = 10;
    Y = 10;
document.write(X === Y); //Triple Equal Sign Compare True Same Value & Data Type
document.write("<br>"); //Line break

    Q = 82
    W = "82";
document.write(Q === W); //Triple Equal Sign Compare False Same Value, Different Data Type
document.write("<br>"); //Line break

    A = "Mangus";
    B = "Mangus";
document.write( A === B); //Triple Equal Sign Compare True Same Value & Data Type
document.write("<br>"); //Line break

    S = 82
    D = 17;
document.write(S === D); //Triple Equal Sign Compare False Different Value, Same Data Type
document.write("<br>"); //Line break

    Z = 82
    C = "Cookie Monster";
document.write(Z === C); //Triple Equal Sign Compare False Different Value, Different Data Type
document.write("<br>"); //Line break

document.write(5 > 2 && 10 > 4); //Logic Operators (AND) - Return True (Both True)
document.write("<br>"); //Line break

document.write(5 > 10 && 10 > 4); //Logic Operators (AND) - Return False (One True)
document.write("<br>"); //Line break

document.write(5 > 10 || 10 > 4); //Logic Operators (OR) - Return True (One True)
document.write("<br>"); //Line break

document.write(5 > 10 || 10 > 20); //Logic Operators (OR) - Return False (Neither True)
document.write("<br>"); //Line break

function examp_Function1(){ //Displays NaN
    document.getElementById("Test1").innerHTML = 0/0;
}
function examp_Function2(){ //NaN on string
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}
function examp_Function3(){ //NaN on number
    document.getElementById("Test3").innerHTML = isNaN('007');
}
function not_Function1(){ //Not Function - False
    document.getElementById("Not1").innerHTML = !(20 > 10);
}
function not_Function2(){ //Not Function Double Negative - True
    document.getElementById("Not2").innerHTML = !(5 > 10);
}
console.log(2 + 2); //Display '4' in console
console.log(2 > 3); //Display 'false' in console