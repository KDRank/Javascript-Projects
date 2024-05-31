function Ride_Function(){ //Function for 'Are you tall enough to ride?'
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
function Vehicle (Make, Model, Year, Color){ //Constructor function for vehicle details
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//Variables for vehicle details
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
//First function
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
//My New_and_This function
function myFunction2() {
    document.getElementById("New_and_This").innerHTML = "Jack drives a " + Jack.Vehicle_Make + " " + Jack.Vehicle_Model + ", which is made in " + Jack.Vehicle_Year + ", while Emily's vehicle was made in " + Emily.Vehicle_Year;
}

function Movie (Director, Genre, Year, Rating){ //Constuctor function for movie facts!
    this.Movie_Director = Director;
    this.Movie_Genre = Genre;
    this.Movie_Year = Year;
    this.Movie_Rating = Rating;
}
//Variables for Movie function
var Hellraiser = new Movie("Clive Barker", "Supernatural Horror", 1987, "6.9/10");
var Halloween = new Movie("John Carpenter", "Horror", 1978, "7.7/10");
var ReservoirDogs = new Movie("Quentin Tarantino", "Neo-Noir Crime", 1992, "8.3/10");
var StepBrothers = new Movie("Adam McKay", "Comedy", 2008, "6.9/10");
//Function for movie facts
function movie_Function() {
    document.getElementById("movie").innerHTML = "Reservoir Dogs was directed by " + ReservoirDogs.Movie_Director + " in the year " + ReservoirDogs.Movie_Year + " but " + Halloween.Movie_Director + " directed Halloween in " + Halloween.Movie_Year + "." + " Halloween was a scary " + Halloween.Movie_Genre + " film, while Step Brothers is a funny " + StepBrothers.Movie_Genre + " from " + StepBrothers.Movie_Year + " with a " + StepBrothers.Movie_Rating + " on IMDb.";
}
//Nested Function
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}