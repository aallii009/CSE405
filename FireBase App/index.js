firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
        document.getElementById("user_div").style.display = "block";
		document.getElementById("login_div").style.display = "none";
  } else {
  	    document.getElementById("user_div").style.display = "none";
		document.getElementById("login_div").style.display = "block";
  }
  var user = firebase.auth().currentUser;

  if(user != null){
  	var email_id = user.email;
  	document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

  }
});


function login() {
	
	var userEmail = document.getElementById("email_input").value;
	var userPass = document.getElementById("password_input").value;

	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
});

}
function logout() {

	firebase.auth().signOut();
};
