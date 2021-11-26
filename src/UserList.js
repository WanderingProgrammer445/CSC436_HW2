import react from 'react';
import User from './User';

function UserList({users}){
return(
    <>
    {users.map((user) => <User id={user.id} name={user.username}/>)}
    </>);
}

export default UserList;