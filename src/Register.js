import react from 'react';
import {useState} from 'react';

function Register({dispatchUser}) {

	const [username, setUsername] = useState('');
	const [newPassword, setNewPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	function handleUserName(evt){setUsername(evt.target.value)}

	function updateNewPassword(evt){setNewPassword(evt.target.value)}
	function updateConfirmPassword(evt){setConfirmPassword(evt.target.value)}

  return (
    <div>
	    <form onSubmit={evt=>{evt.preventDefault();dispatchUser({type:"REGISTER", username})}}>
	       <label htmlFor="newUser">Username:  </label><input id="newUser" type="text" name="newUser" onChange={handleUserName}/>
	       <label htmlFor="newPassword">Password:   </label><input id="newPassword" type="password" value={newPassword} name="newPassword" onChange={updateNewPassword}/>
		   <label htmlFor="confirmPassword">Confirm Password:   </label><input id="confirmPassword" type="password" value={confirmPassword} name="confirmPassword" onChange={updateConfirmPassword}/>
		   <button name="loginbutton" type="submit" disabled={newPassword==='' || confirmPassword === '' || newPassword!==confirmPassword}>Register</button>
		</form>
	</div>
  );
}

export default Register;