import {Link} from 'react-navi';

function User({id, username}){

    return (<>
    <Link href={`/users/${id}`}>{username}</Link>
    </>);

}
export default User;