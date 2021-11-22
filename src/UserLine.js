
import { UserContext } from './Contexts';
import Login from './Login';
import Register from './Register';
import React, {useState} from 'react'
import { useContext } from 'react/cjs/react.development';
import {Button} from 'react-bootstrap';

//import Logout from './Logout';

function UserLine() { 

  

  const Logout = React.lazy(() => import('./Logout'))
  
  const {username} = useContext(UserContext);


  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  console.log(showLogin);
   
   if(username){
	   return <Logout/>
   } else {
	   return(
	        <>
			<Button variant="link" onClick={(e) => setShowLogin(true)}>
			   Login
			   </Button>
			   <Button variant="link" onClick={(e) => setShowRegister(true)}>
			   Register
			   </Button>
			   <Login show={showLogin} handleClose={() => setShowLogin(false)}/>
				<Register show={showRegister} handleClose={() => setShowRegister(false)}/>
			</>
	   )
   }
}

export default UserLine;