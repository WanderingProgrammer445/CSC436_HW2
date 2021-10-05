import react from 'react';
import {useState} from 'react';

function Logout({username ='', dispatchUser}) {
  return (
    <div>
	    <form onSubmit={evt=>{evt.preventDefault();dispatchUser({type: "LOGOUT"})}}>
	       You are logged in as <b>{username}</b> 
		   <button name="logoutbutton" type="submit">Logout</button>
		</form>
	</div>
  );
}

export default Logout;