//Loop  counting function
function call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//Length Property returns length of a string
function Nightmare_Length() {
    let title = "A Nightmare on Elm Street";
    let length = title.length
    document.getElementById("Nightmare").innerHTML = length;
}

//For Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Arrays and Objects
function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[3] + ".";
}

//Const Keyword
function constant_function1() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant1").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}
function constant_function2() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant2").innerHTML = "The cost of the " + Musical_Instrument.color + " " + Musical_Instrument.type + " is " + Musical_Instrument.price;
}

//Let
var X = 82;
document.write(X);
    {
        let X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);

//Object
function let_function() {
    let x = myFunction(4, 3); 
    document.getElementById("let").innerHTML = x;
    
    function myFunction(a, b) {
      return a * b;   
    }
}
