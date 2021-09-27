
function Register() {
  return (
    <div>
	    <form action="#">
	       <label htmlFor="newUser">Username:  </label><input id="newUser" type="text" name="newUser"/>
	       <label htmlFor="newPassword">Password:   </label><input id="newPassword" type="password" name="newPassword"/>
		   <label htmlFor="confirmPassword">Confirm Password:   </label><input id="confirmPassword" type="password" name="confirmPassword"/>
		   <button name="loginbutton" type="submit">Register</button>
		</form>
	</div>
  );
}

export default Register;