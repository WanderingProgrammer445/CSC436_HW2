import react, { useContext, useEffect } from 'react'
import { useResource } from 'react-request-hook'
import { Link } from 'react-navi'
import { ToDoContext, UserContext } from './Contexts'
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'

function HomePage() {

    const{username} = useContext(UserContext)
    const{toDoList} = useContext(ToDoContext)

    return (<>
        <div>
            {username && <AddToDo />}
            {toDoList && <ToDoList />}
        </div>
    </>)

}

export default HomePage;