import react, { useContext, useEffect } from 'react'
import { useResource } from 'react-request-hook'
import { Link } from 'react-navi'
import { UserContext } from './Contexts'
import ToDo from './ToDo';

function ProfilePage({ id}) {

   //console.log(id)

    const { token } = useContext(UserContext)

    const [userToDos, getUserToDos] = useResource((userId) => ({
        url: `/todos/byUserId/${userId}`,
        method: 'get',
        headers: { "Authorization": `${token}` }
    }))
    useEffect(()=>{console.log("Getting user todos");getUserToDos(id)}, [])
    
    if (userToDos && userToDos.data && userToDos.data.length) {
    
        return (<>
            {userToDos.data.map((todo,i)=><ToDo  title={todo.title} description={todo.description} 
     dateCreated={todo.dateCreated} complete={todo.complete} dateCompleted={todo.dateCompleted} listIndex={todo._id} key={i} canToggleOrDelete={todo.canToggleOrDelete} todo_id={i} id={todo._id}/>)}
            <div><Link href="/">Back to Home Page</Link></div>
        </>)
    } else {
        return (<>
            <div><Link href="/">Back to Home Page</Link></div>
        </>)
    }

}

export default ProfilePage;