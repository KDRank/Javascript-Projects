function validateForm() {
    let x = document.forms["contactForm"]["fullname"].value;
    let y = document.forms["contactForm"]["email"].value;
    let z = document.forms["contactForm"]["message"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    if (y == "") {
        alert("Email must be filled out");
      return false;
    }
    if (z == "") {
        alert("Please enter a message");
      return false;
  }
}