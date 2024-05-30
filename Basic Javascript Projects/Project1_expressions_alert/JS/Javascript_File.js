var Y = "Here's an alert!"; //assigning variable Y string "Here's an Alert"
window.alert(Y); //utilizing window.alert to display var Y

var X = "Hello, World!"; //assigning variable X string "Hello, World!"
document.write(X);//utilizing document.write to display var X

document.write("<br>Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\" Bart responded."); //<br> utilized to break line before writing text
document.write("<br>\"Be who you are and say what you feel,"
    + " because those who mind don\'t matter and those who matter don\'t mind." // concatenated string across multiple lines
    + "-Dr. Seuss<br>");

var A = "Tuesday" + "Wednesday<br>";//varible A assigned with two strings
document.write(A);//writes var A
var B = X + Y; //new varible B to concatenate varibles X & Y
document.write(B);//writes X & Y (var B)

var Sent1 = "This is the beginning of the string"; //String variable 'Sent1'
var Sent2 = " and this is the end of the string"; //String variable 'Sent2'
document.write(Sent1 + Sent2) // concatenating strings Sent1 and Sent2

var Family = "The Arrezzinis", Dad = "Jeramiah", Mom = "Hermione", Daughter = "Penny", Son = "Zorro";
document.write(Dad);

document.write(3 + 3); //expression
var Q = 3;//assigning variable Q a numeric value
var W = 3;//assigning variable W a numeric value
document.write(Q + W);//writes expression of variables Q&W

function My_First_Function() {                  //Defining a function and naming it
    var str = "This is the button text!";       //Defining a variable and giving it
                                                //a string value
    document.getElementById("Button_Text").innerHTML = str; //Putting the value
                                                            //of the variable into the HTML elementFromPoint
                                                            //with the "Button_Text" id
}