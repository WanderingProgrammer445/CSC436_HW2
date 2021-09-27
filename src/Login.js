
function Login() {
  return (
    <div>
	    <form action="#">
	       <label htmlFor = "username">Username:  </label><input id="username" type="text" name="username"/>
	       <label htmlFor = "password">Password:   </label><input id="password" type="password" name="password"/>
		   <button name="loginbutton" type="submit">Login</button>
		</form>
	</div>
  );
}

export default Login;