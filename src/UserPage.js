import react, { useEffect } from 'react'
import { useResource } from 'react-request-hook'
import { Link } from 'react-navi'
import User from './User';

function UserPage() {
    const [users, getUsers] = useResource(() => ({
        url: '/user',
        method: 'get'
    }));

    useEffect(getUsers, [])


    if(users && users.data){
    return (<>
        
            { users.data.map((user) => <div><User id={user.id} username={user.username}/></div>) }
        <hr/>
        <div><Link href="/">Back to Home Page</Link></div>
    </>)
    }else{
        return (<>
        <div><Link href="/">Back to Home Page</Link></div>
    </>)
    }
}

export default UserPage;