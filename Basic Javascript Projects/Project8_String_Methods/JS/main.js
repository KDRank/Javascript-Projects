//Concatenates full sentence and utilizes search() function
//search() displays the location in the string where the defined part of string is located
function full_Sentence1() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate1").innerHTML = whole_sentence;
}
function full_Sentence2() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    let whole_search = whole_sentence.search("into");//searches for 'into' within complete sentence
    document.getElementById("Concatenate2").innerHTML = whole_search;
}

//Utilize Slice method and toUpperCase() method
//toUpperCase() converts string to all uppercase
function slice_Method1() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice1").innerHTML = Section;
}
function slice_Method2() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);
    let Section2 = Section.toUpperCase(); //Converts Slice to Uppercase with toUpperCase() method
    document.getElementById("Slice2").innerHTML = Section2;
}

//Number toString() Method
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//toPrecision() Method
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//toFixed() Method
//Method returns string to specified number of decimals
function fixed_Method1() {
    var Z = 43.723;
    let N = Z.toFixed();
    document.getElementById("fixed1").innerHTML = N;
}
function fixed_Method2() {
    var Z = 43.723;
    let N = Z.toFixed();
    let N1 = Z.toFixed(1);
    document.getElementById("fixed2").innerHTML = N1;
}

//valueOf() Method
//Returns primitive value of string
function value_Method() {
    var S = "Here's a primitive string!";
    let val = S.valueOf();
    document.getElementById("value").innerHTML = val;
}