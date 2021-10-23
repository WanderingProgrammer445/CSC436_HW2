import react from 'react';
import {useState} from 'react';
import { useContext } from 'react';
import { UserContext } from './Contexts';
import {useResource} from 'react-request-hook'
function Register() {

	const {dispatch} = useContext(UserContext);

	const [username, setUsername] = useState('');
	const [newPassword, setNewPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
    

	function handleUserName(evt){setUsername(evt.target.value)}

	function updateNewPassword(evt){setNewPassword(evt.target.value)}
	function updateConfirmPassword(evt){setConfirmPassword(evt.target.value)}

	const[userRegistered, registerUser] = useResource((username, password)=>({
        url: '/users',
		method: 'post',
		data: {username, password}
	}))

  return (
    <div>
	    <form onSubmit={evt=>{evt.preventDefault();dispatch({type:"REGISTER", username});registerUser(username, newPassword)}}>
	       <label htmlFor="newUser">Username:  </label><input id="newUser" type="text" name="newUser" onChange={handleUserName}/>
	       <label htmlFor="newPassword">Password:   </label><input id="newPassword" type="password" value={newPassword} name="newPassword" onChange={updateNewPassword}/>
		   <label htmlFor="confirmPassword">Confirm Password:   </label><input id="confirmPassword" type="password" value={confirmPassword} name="confirmPassword" onChange={updateConfirmPassword}/>
		   <button name="loginbutton" type="submit" disabled={newPassword==='' || confirmPassword === '' || newPassword!==confirmPassword}>Register</button>
		</form>
	</div>
  );
}

export default Register;