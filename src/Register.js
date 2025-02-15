import react from 'react';
import {useState} from 'react';
import { useContext, useEffect } from 'react';
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

	/* //JSON SERVER implementation
	const[userRegistered, registerUser] = useResource((username, password)=>({
        url: '/users',
		method: 'post',
		data: {username, password}
	}))
    */

	const[userRegistered, registerUser] = useResource((username, password, passwordConfirmation)=>({
		url: '/auth/register',
		method: 'post',
		data: {username, password, passwordConfirmation}
	}))

	const [registerFailed, setRegisterFailed] = useState(false) ;

   /*  // JSON SERVER implementation
	useEffect(()=>{
		if(userRegistered && userRegistered.data){
			if(userRegistered.data.length){
				//const token = userLoggedIn.data.;
				setLoginFailed(false)
				console.log(userRegistered.data[0])
				console.log(userRegistered.data[0].username)
				dispatch({type:"REGISTER", username: userRegistered.data[0].username})
				
			}else{
				setLoginFailed(true)
			}
		}
	},[userRegistered])
    */
/*	useEffect(()=>{
		if(userRegistered && userRegistered.data){
			if(userRegistered.data.access_token && userRegistered.data.username){
				//const {access_token} = userRegistered.data.;
				setRegisterFailed(false)
				console.log(userRegistered.data)
				console.log(userRegistered.data.username)
				dispatch({type:"REGISTER", username: userRegistered.data.username, token: userRegistered.data.access_token})
				
			}else{
				setRegisterFailed(true)
			}
		}
	},[userRegistered])
*/
	    useEffect(() => {
		        if (userRegistered && userRegistered.isLoading === false && (userRegistered.data || userRegistered.error)) {
		            if (userRegistered.error) {
		                setRegisterFailed(true)
		                alert('failed')
		            } else {
		                setRegisterFailed(false)
		                console.log(userRegistered.data)
		                dispatch({ type: 'REGISTER', username, token: userRegistered.data.access_token })          
		            }
		        } 
		    }, [userRegistered])

  return (

	<Modal show={show} onHide={handleClose}>
	<Form onSubmit={e => { e.preventDefault(); registerUser(username, newPassword, confirmPassword); handleClose(); }}>
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
		{registerFailed && <Form.Text style={{ color: 'red' }}>Registration Failed</Form.Text>}
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