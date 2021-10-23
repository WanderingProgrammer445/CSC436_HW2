import react, { useEffect } from 'react';
import {useState} from 'react';
import {useResource} from 'react-request-hook'
import { useContext } from 'react';
import { UserContext } from './Contexts';

function Login() {

	const {dispatch} = useContext(UserContext);
	const[userLoggedIn, logInUser] = useResource((username, password)=>({
		url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
		method: 'get'
	}))

	const [loginFailed, setLoginFailed] = useState(false) 



	useEffect(()=>{
		if(userLoggedIn && userLoggedIn.data){
			if(userLoggedIn.data.length){
				setLoginFailed(false)
				console.log(userLoggedIn.data[0])
				console.log(userLoggedIn.data[0].username)
				dispatch({type:"LOGIN", username: userLoggedIn.data[0].username})
				
			}else{
				setLoginFailed(true)
			}
		}
	},[userLoggedIn])

    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function handleUserName(evt){setUsername(evt.target.value)}
	function updatePassword(evt){setPassword(evt.target.value)}
    
	return (
        <div>
	        <form onSubmit={evt=>{evt.preventDefault();logInUser(username, password)}}>
	            <label htmlFor = "username">Username:  </label><input id="username" type="text" name="username" onChange={handleUserName} />
	            <label htmlFor = "password">Password:   </label><input id="password" type="password" value={password} name="password" onChange={updatePassword}/>
		        <button name="loginbutton" type="submit" disabled={password===''}>Login</button>
				{loginFailed && <span style={{color: 'red'}}>Login Failed</span>}
		    </form>
	</div>
  );
}

export default Login;