document.addEventListener("DOMContentLoaded", function () {
  var signInButton = document.getElementById("modal-sign-in-button");
  signInButton.addEventListener("click", signIn);
});

function signIn() {
  // Retrieve the username and password values
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");
  var username = usernameInput.value;
  var password = passwordInput.value;

  // Perform any necessary actions for successful sign-in
  alert("Sign in successful!");

  // Update the sign-in button text with the entered username
  var signInButton = document.getElementById("sign-in-button");
  signInButton.innerHTML = username;
  signInButton.disabled = true;

  // Clear the input fields
  usernameInput.value = "";
  passwordInput.value = "";

  // Close the sign-in modal
  var signInModal = document.getElementById("signInModal");
  var bootstrapModal = bootstrap.Modal.getInstance(signInModal);
  bootstrapModal.hide();
}
