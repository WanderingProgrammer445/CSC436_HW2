
import Login from './Login';
import Register from './Register';
import Logout from './Logout';

function UserLine({username='', dispatchUser}) { 
   
   if(username){
	   return <Logout username={username} dispatchUser={dispatchUser}/>
   } else {
	   return(
	        <>
			    <Login dispatchUser={dispatchUser}/>
				<Register dispatchUser={dispatchUser}/>
			</>
	   )
   }
}

export default UserLine;