import react from 'react';
import {useState} from 'react';

function Login({dispatchUser}) {

    const [username, setUsername] = useState('');

	function handleUserName(evt){setUsername(evt.target.value)}
    
	return (
        <div>
	        <form onSubmit={evt=>{evt.preventDefault();dispatchUser({type:"LOGIN", username})}}>
	            <label htmlFor = "username">Username:  </label><input id="username" type="text" name="username" onChange={handleUserName} />
	            <label htmlFor = "password">Password:   </label><input id="password" type="password" name="password"/>
		        <button name="loginbutton" type="submit">Login</button>
		    </form>
	</div>
  );
}

export default Login;