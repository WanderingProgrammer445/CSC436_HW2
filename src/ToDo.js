import {useContext} from 'react'
import {ToDoContext,UserContext} from './Contexts'
import {useResource} from 'react-request-hook'
import { useEffect } from 'react';

function ToDo({title='', description='', dateCreated=Date.now(), complete=false, listIndex, dateCompleted=Date.now(), canToggleOrDelete= false, todo_id ="", id=""}) {
    const toDoKey = listIndex;
	
	const {token} = useContext(UserContext);
    //console.log(props);
	
//	console.log(description);
    console.log("canToggleOrDelete: ")
    console.log(canToggleOrDelete)
	const[toDoDeleted, deleteToDo] = useResource((id)=>({
        url: `/todos/${id}`,
        method: 'delete',
		headers: { "Authorization": `${token}` }
    }))

	const[toDoToggled, toggleToDo] = useResource((id, title, description, dateCreated, complete, dateCompleted)=>({
        url: `/todos/${id}`,
        method: 'put',
		headers: { "Authorization": `${token}` },
        data: {title, description, dateCreated, complete, dateCompleted}

    }))


	const {username} = useContext(UserContext)

	
    
	const {dispatchToDo} = useContext(ToDoContext)
	

	function handleDelete(evt){
        dispatchToDo({type:"DELETE_TODO", todo_id: todo_id})
        deleteToDo(id)


	}

	function handleToggle(evt){
		const date = Date.now()
        dispatchToDo({type: "TOGGLE_TODO", todo_id: todo_id, completed: evt.target.checked, date: date})
		toggleToDo(id, title, description, dateCreated, evt.target.checked, evt.target.checked?date:'')
	}
    return (
        <div>
	        <h3>{title}</h3>
		    <p>{description}</p>
		    <p>This todo was created on {dateCreated}</p>
		    <p>This todo was completed on {dateCompleted}</p>
		    <input  type="checkbox" disabled={username==="" || (!canToggleOrDelete)}  checked={complete} onClick={handleToggle}/>
			<button type="button" disabled={username==="" || (!canToggleOrDelete)} onClick={handleDelete}>Delete</button>
	    </div>
  );
  
}

export default ToDo;
