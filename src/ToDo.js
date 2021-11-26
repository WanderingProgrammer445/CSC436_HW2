import {useContext} from 'react'
import {ToDoContext,UserContext} from './Contexts'
import {useResource} from 'react-request-hook'
import { useEffect } from 'react/cjs/react.development';

function ToDo({title='', description='', dateCreated=Date.now(), complete=false, listIndex, dateCompleted=Date.now(), canDeleteOrToggle=false, todo_id =""}) {
    const toDoKey = listIndex;
	
	const {token} = useContext(UserContext);
    //console.log(props);
	
//	console.log(description);

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

	
    
	const {dispatchToDo, createToDo} = useContext(ToDoContext)
	

	function handleDelete(evt){
        dispatchToDo({type:"DELETE_TODO", toDoItemKey: toDoKey})
        deleteToDo(todo_id)


	}

	function handleToggle(evt){
		const date = Date.now()
        dispatchToDo({type: "TOGGLE_TODO", toDoItemKey: toDoKey, completed: evt.target.checked, date: date})
		toggleToDo(todo_id, title, description, dateCreated, evt.target.checked, evt.target.checked?date:'')
	}
    return (
        <div>
	        <h3>{title}</h3>
		    <p>{description}</p>
		    <p>This todo was created on {dateCreated}</p>
		    <p>This todo was completed on {dateCompleted}</p>
		    <input  type="checkbox" disabled={username==="" || (!canDeleteOrToggle)}  checked={complete} onClick={handleToggle}/>
			<button type="button" disabled={username==="" || (!canDeleteOrToggle)} onClick={handleDelete}>Delete</button>
	    </div>
  );
  
}

export default ToDo;
