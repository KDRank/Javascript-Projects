//IF Statements
if (1 < 2){
    document.write("The left number is smaller than the number on the right.<br>");
}

function get_Date() {
    if(new Date().getHours() < 18){
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//My IF Statement
function get_Time() {
    if(new Date().getHours() > 9){
        document.getElementById("DayTime").innerHTML = "Get your day going!";
    }
    else
        document.getElementById("DayTime").innerHTML = "Almost time to get back to work!";
}

//ELSE Statement
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//My ELSE Statement
function Movie_Function() {
    Age2 = document.getElementById("MovieAge").value;
    if (Age2 >= 18) {
        Movie = "You are old enough to see the movie!";
    }
    else {
        Movie = "You must be accompanied by an adult to see the movie!";
    }
    document.getElementById("are_you_movie").innerHTML = Movie;
}

//ELSE IF Statements
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

// Global Scope
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

// Local Scope with console Log
function Add_numbers_3() {
    var Y = 20;
    console.log(20 + Y + "<br>");
}
function Add_numbers_4() {
    console.log(Y + 100);
}
Add_numbers_3();
Add_numbers_4();