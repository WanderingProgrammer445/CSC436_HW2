import react from 'react';
import {useState} from 'react';
import { useContext } from 'react';
import { UserContext } from './Contexts';

function Logout(/*{username ='', dispatchUser}*/) {

	const {user, dispatch} = useContext(UserContext);

	/*<b>{username}</b> */
  return (
    <div>
	    <form onSubmit={evt=>{evt.preventDefault();dispatch({type: "LOGOUT"})/*dispatchUser({type: "LOGOUT"})*/}}>
	       You are logged in as <b>{user}</b>
		   <button name="logoutbutton" type="submit">Logout</button>
		</form>
	</div>
  );
}

export default Logout;