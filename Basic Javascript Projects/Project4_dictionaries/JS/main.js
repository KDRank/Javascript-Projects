function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Color:"Brown", //Two color KVPS, will return second KVP instead of first
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound; //Deletes Sound KVP before called
    document.getElementById("Dictionary1").innerHTML = Animal.Sound; //Returns 'undefined' since Sound KVP was deleted from dictionary
    document.getElementById("Dictionary2").innerHTML = Animal.Color + " " + Animal.Breed; //Returns second Color KVP
}