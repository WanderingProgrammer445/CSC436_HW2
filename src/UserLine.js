
import Login from './Login';
import Register from './Register';
import Logout from './Logout';

function UserLine({username='', dispatchUser}) { 
   
   if(username){
	   return <Logout/>
   } else {
	   return(
	        <>
			    <Login/>
				<Register/>
			</>
	   )
   }
}

export default UserLine;