
import Login from './Login';
import Register from './Register';
import Logout from './Logout';

function UserLine({username=''}) { 
   
   if(username){
	   return <Logout username={username}/>
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