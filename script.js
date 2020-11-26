function otherTicked() {
  // Get the checkbox
  var checkBox = document.getElementById("other");
  // Get the output text
  var text = document.getElementById("otherTextBox");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function contactTicked() {
  // Get the checkbox
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  // Get the output text
  var emailTextBox = document.getElementById("emailTextBox");
  var phoneBox = document.getElementById("phoneBox");

  // If the checkbox is checked, display the output text
  if (email.checked == true){
    emailTextBox.style.display = "block";
    phoneBox.style.display = "none";
  } else if (phone.checked == true) {
    phoneBox.style.display = "block";
    emailTextBox.style.display = "none";
  }
  else {
    emailTextBox.style.display = "none";
    phoneBox.style.display = "none";
  }
}