import react from 'react';
import {useState} from 'react';
import { useContext } from 'react';
import { UserContext } from './Contexts';
import {useResource} from 'react-request-hook'
import {Modal, Form, Button} from 'react-bootstrap';

function Register({show, handleClose}) {

	const {dispatch} = useContext(UserContext);

	const [username, setUsername] = useState('');
	const [newPassword, setNewPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
    

	function handleUserName(evt){setUsername(evt.target.value)}

	function updateNewPassword(evt){setNewPassword(evt.target.value)}
	function updateConfirmPassword(evt){setConfirmPassword(evt.target.value)}

	const[userRegistered, registerUser] = useResource((username, password)=>({
        url: '/users',
		//url: 'auth/register'
		method: 'post',
		data: {username, password}
	}))

  return (

	<Modal show={show} onHide={handleClose}>
	<Form onSubmit={e => { e.preventDefault(); registerUser(username, newPassword); handleClose(); }}>
	  <Modal.Header closeButton>
		<Modal.Title>Register</Modal.Title>
	  </Modal.Header>
	  <Modal.Body>
		<Form.Label htmlFor="register-username">Username:</Form.Label>
		<Form.Control type="text" value={username} onChange={e => handleUserName(e)} name="register-username" id="register-username" />
		<Form.Label htmlFor="register-password">Password:</Form.Label>
		<Form.Control type="password" name="register-password" id="register-password" value={newPassword} onChange={e => updateNewPassword(e)} />
		<Form.Label htmlFor="register-password-repeat">Repeat password:</Form.Label>
		<Form.Control type="password" name="register-password-repeat" id="register-password-repeat" value={confirmPassword} onChange={e => updateConfirmPassword(e)} />
	  </Modal.Body>
	  <Modal.Footer>
		<Button variant="secondary" onClick={handleClose}>Cancel</Button>
		<Button variant="primary" type="submit" disabled={username.length === 0 || newPassword.length === 0 || newPassword !== confirmPassword}>Register</Button>
	  </Modal.Footer>
	</Form>
  </Modal>
	/** 
    <div>
	    <form onSubmit={evt=>{evt.preventDefault();dispatch({type:"REGISTER", username});registerUser(username, newPassword)}}>
	       <label htmlFor="newUser">Username:  </label><input id="newUser" type="text" name="newUser" onChange={handleUserName}/>
	       <label htmlFor="newPassword">Password:   </label><input id="newPassword" type="password" value={newPassword} name="newPassword" onChange={updateNewPassword}/>
		   <label htmlFor="confirmPassword">Confirm Password:   </label><input id="confirmPassword" type="password" value={confirmPassword} name="confirmPassword" onChange={updateConfirmPassword}/>
		   <button name="loginbutton" type="submit" disabled={newPassword==='' || confirmPassword === '' || newPassword!==confirmPassword}>Register</button>
		</form>
	</div>
	*/
  );
}

export default Register;