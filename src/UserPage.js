import react, { useEffect } from 'react'
import{useResource} from 'react-request-hook'
import User from './User'

function UserPage(){
    const[users, getUsers] = useResource(()=>({
        url: 'api/users',
        method: 'get'
    }));

    useEffect(getUsers,[])
return(
<>
{users.map((user) => <User id={user.id} name={user.username}/>)}
</>);

}

export default UserPage;