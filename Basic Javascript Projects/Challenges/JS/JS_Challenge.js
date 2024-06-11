//Page fade-in
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

//Opens form
function openForm() {
    document.getElementById("dataForm").style.display = "block";
}

//Closes form
function closeForm() {
    document.getElementById("dataForm").style.display = "none";
}

//Form validation
function validateForm() {
    let x = document.forms["dataForm"]["fname"].value;
    let y = document.forms["dataForm"]["lname"].value;
    let z = document.forms["dataForm"]["email"].value;
    let q = document.forms["dataForm"]["phone"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }
    if (z == "") {
        alert("Please enter email address");
        return false;
    }
    if (q == "") {
        alert("Please enter phone number");
        return false;
    }
}

//Slideshow
$("slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
    .fadeOut(1000)
    .fadeOut(1000)
    .fadeIn(1000)
    .next()
    .end()
    .appendTo('#slideshow');
}, 3000);