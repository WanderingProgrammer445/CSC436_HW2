import react from 'react';
import {useState} from 'react';

function Register({dispatchUser}) {

	const [username, setUsername] = useState('');

	function handleUserName(evt){setUsername(evt.target.value)}

  return (
    <div>
	    <form onSubmit={evt=>{evt.preventDefault();dispatchUser({type:"REGISTER", username})}}>
	       <label htmlFor="newUser">Username:  </label><input id="newUser" type="text" name="newUser" onChange={handleUserName}/>
	       <label htmlFor="newPassword">Password:   </label><input id="newPassword" type="password" name="newPassword"/>
		   <label htmlFor="confirmPassword">Confirm Password:   </label><input id="confirmPassword" type="password" name="confirmPassword"/>
		   <button name="loginbutton" type="submit">Register</button>
		</form>
	</div>
  );
}

export default Register;