import {Link} from 'react-navi';

function User({id, username}){

    return (<>
    <Link>{username}</Link>
    </>);

}
export default User;