import react from 'react';
import {useState} from 'react';
import { useContext } from 'react';
import { UserContext } from './Contexts';

function Logout() {

	const {username, dispatch} = useContext(UserContext);

	
  return (
    <div>
	    <form onSubmit={evt=>{evt.preventDefault();dispatch({type: "LOGOUT"})}}>
	       You are logged in as <b>{username}</b>
		   <button name="logoutbutton" type="submit">Logout</button>
		</form>
	</div>
  );
}

export default Logout;