function otherTicked() {
  var checkBox = document.getElementById("other");

  var text = document.getElementById("otherTextBox");

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

function showHelp1() {
  var section = document.getElementById("help1");
  if (section.style.display === "none") {
    section.style.display = "block";
    document.getElementById("help1Button").innerHTML = "^";
  } else {
    section.style.display = "none";
    document.getElementById("help1Button").innerHTML = "v";
  }
}

function showHelp2() {
  var section = document.getElementById("help2");
  if (section.style.display === "none") {
    section.style.display = "block";
    document.getElementById("help2Button").innerHTML = "^";
  } else {
    section.style.display = "none";
    document.getElementById("help2Button").innerHTML = "v";
  }
}

function showHelp3() {
  var section = document.getElementById("help3");
  if (section.style.display === "none") {
    section.style.display = "block";
    document.getElementById("help3Button").innerHTML = "^";
  } else {
    section.style.display = "none";
    document.getElementById("help3Button").innerHTML = "v";
  }
}