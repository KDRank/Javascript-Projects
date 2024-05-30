function CalcFunc() { //Function created for multiplying two numbers
    var NumberOne = document.getElementById("num1").value; //First number assigned 'num1'
    var NumberTwo = document.getElementById("num2").value; //Second number assigned 'num2'
    var TotalMultiplied = NumberOne * NumberTwo; //Multiplication total assigned to varible TotalMultiplied

    document.getElementById("total").innerHTML = TotalMultiplied;//TotalMultiplied displayed on button click
}
function myFunction() { //Function for concatenating two parts of a sentence
    var sentence = "I am learning"; //Part 1 of sentence
    sentence += " a lot from this course!"; //Part 2 of sentence
    document.getElementById("Concatenate").innerHTML = sentence; //Output of concatenated parts of sentence
}