import react, { useEffect } from 'react'
import{useResource} from 'react-request-hook'
import {Link} from 'react-navi'

function UserPage(){
    const[users, getUsers] = useResource(()=>({
        url: '/users',
        method: 'get'
    }));

    useEffect(getUsers,[])
    
    return(<>
    <div><Link href="/">Go back</Link></div>
    </>)

}

export default UserPage;