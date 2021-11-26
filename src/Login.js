import react, { useEffect } from 'react';
import {useState} from 'react';
import {useResource} from 'react-request-hook'
import { useContext } from 'react';
import { UserContext, ToDoContext } from './Contexts';
import {Modal, Form, Button} from 'react-bootstrap';

function Login({show, handleClose}) {

	const {dispatch} = useContext(UserContext);
	const {refreshToDo} = useContext(ToDoContext);
	/*const[userLoggedIn, logInUser] = useResource((username, password)=>({
		//url: '/api/auth/login',
		url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
		method: 'get'
		//method: 'post'
	}))*/

	const[userLoggedIn, logInUser] = useResource((username, password)=>({
		url: '/auth/login',
		method: 'post',
		data: {username, password}
	}))

   
	const [loginFailed, setLoginFailed] = useState(false) 

    
/*** JSON SERVER version
	useEffect(()=>{
		if(userLoggedIn && userLoggedIn.data){
			if(userLoggedIn.data.length){
				//const token = userLoggedIn.data.;
				setLoginFailed(false)
				console.log(userLoggedIn.data[0])
				console.log(userLoggedIn.data[0].username)
				dispatch({type:"LOGIN", username: userLoggedIn.data[0].username})
				
			}else{
				setLoginFailed(true)
			}
		}
	},[userLoggedIn])
*/


/*
	useEffect(()=>{
		if(userLoggedIn && userLoggedIn.data){
			if(userLoggedIn.data.access_token && userLoggedIn.data.username){
				//const token = userLoggedIn.data.;
				setLoginFailed(false)
				console.log(userLoggedIn.data)
				console.log(userLoggedIn.data.username)
				dispatch({type:"LOGIN", username: userLoggedIn.data.username, token: userLoggedIn.data.access_token})
				
			}else{
				console.log("Failed")
				setLoginFailed(true)
			}
		}
	},[userLoggedIn])*/
    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	    useEffect(() => {
		        if (userLoggedIn && userLoggedIn.isLoading === false && (userLoggedIn.data || userLoggedIn.error)) {
		            if (userLoggedIn.error) {
		                setLoginFailed(true)
		                alert('failed')
		            } else {
		                setLoginFailed(false)
		                console.log(userLoggedIn.data)
		                dispatch({ type: 'LOGIN', username, token: userLoggedIn.data.access_token }) 
		                refreshToDo(userLoggedIn.data.access_token)
		            }
		        } 
		    }, [userLoggedIn])


	function handleUserName(evt){setUsername(evt.target.value)}
	function updatePassword(evt){setPassword(evt.target.value)}
    
	return (
		<Modal show={show} onHide={handleClose}>
        <Form onSubmit={e => { e.preventDefault(); logInUser(username, password); handleClose() }}>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="login-username">Username:</Form.Label>
          <Form.Control type="text" value={username} onChange={handleUserName} name="login-username" id="login-username" />
          <Form.Label htmlFor="login-password">Password:</Form.Label>
          <Form.Control type="password" value={password} onChange={updatePassword} name="login-password" id="login-password" />
          {loginFailed && <Form.Text style={{ color: 'red' }}>Invalid username or password</Form.Text>}
          </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="primary" disabled={username.length === 0} type="submit">Login</Button>
        </Modal.Footer>
    </Form>
    </Modal>
		/**
        <div>
	        <form onSubmit={evt=>{evt.preventDefault();logInUser(username, password)}}>
	            <label htmlFor = "username">Username:  </label><input id="username" type="text" name="username" onChange={handleUserName} />
	            <label htmlFor = "password">Password:   </label><input id="password" type="password" value={password} name="password" onChange={updatePassword}/>
		        <button name="loginbutton" type="submit" disabled={password===''}>Login</button>
				{loginFailed && <span style={{color: 'red'}}>Login Failed</span>}
		    </form>
	</div>*/
  );
}

export default Login;