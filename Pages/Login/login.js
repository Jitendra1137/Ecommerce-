// Get the form element by id
var form = document.getElementById("login-form");

// Add an event listener for submit event
form.addEventListener("submit", function (event) {
  // Prevent the default behavior of the form
  event.preventDefault();

  // Get the email and password inputs by id
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  // Check if the email and password are correct
  if (email.value === "admin@admin.com" && password.value === "123456") {
    // Display an alert saying "Login successful"
    alert("Login successful");
  } else {
    // Display an alert saying "Incorrect email or password"
    alert("Incorrect email or password");
  }
});
