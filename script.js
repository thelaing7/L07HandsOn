function regexChecker(){
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var nameRegex = /^[A-Z][a-z_-]+$/;
 
  if (firstName, lastName.match(nameRegex)){
      alert("Yay! Your inputs were all correct");
  }
  else {
     alert("Oh no! Thats an invalid format!");
  }
}