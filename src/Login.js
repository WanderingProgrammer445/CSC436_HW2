import react from 'react';
import {useState} from 'react';
import { useContext } from 'react';
import { UserContext } from './Contexts';

function Login(/*{dispatchUser}*/) {

	const {dispatch} = useContext(UserContext);

    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function handleUserName(evt){setUsername(evt.target.value)}
	function updatePassword(evt){setPassword(evt.target.value)}
    
	return (
        <div>
	        <form onSubmit={evt=>{evt.preventDefault();dispatch({type:"LOGIN", username})/*dispatchUser({type:"LOGIN", username})*/}}>
	            <label htmlFor = "username">Username:  </label><input id="username" type="text" name="username" onChange={handleUserName} />
	            <label htmlFor = "password">Password:   </label><input id="password" type="password" value={password} name="password" onChange={updatePassword}/>
		        <button name="loginbutton" type="submit" disabled={password===''}>Login</button>
		    </form>
	</div>
  );
}

export default Login;