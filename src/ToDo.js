import {useContext} from 'react'
import {ToDoContext} from './Contexts'
import {useResource} from 'react-request-hook'

function ToDo({title='', description='', dateCreated=Date.now(), complete=false, listIndex, dateCompleted=Date.now()}) {
    const toDoKey = listIndex;

	const[toDoDeleted, deleteToDo] = useResource((id)=>({
        url: `/todos/${id}`,
        method: 'delete'
    }))

	const[toDoToggled, toggleToDo] = useResource((id, title, description, dateCreated, complete, dateCompleted)=>({
        url: `/todos/${id}`,
        method: 'put',
        data: {id, title, description, dateCreated, complete, dateCompleted}

    }))

	

	const {dispatchToDo, createToDo} = useContext(ToDoContext)
	

	function handleDelete(evt){
        dispatchToDo({type:"DELETE_TODO", toDoItemKey: toDoKey})
        deleteToDo(toDoKey)


	}

	function handleToggle(evt){
		const date = Date.now()
        dispatchToDo({type: "TOGGLE_TODO", toDoItemKey: toDoKey, completed: evt.target.checked, date: date})
		toggleToDo(toDoKey, title, description, dateCreated, evt.target.checked, evt.target.checked?date:'')
	}
    return (
        <div>
	        <h3>{title}</h3>
		    <p>{description}</p>
		    <p>This todo was created on {dateCreated}</p>
		    <p>This todo was completed on {dateCompleted}</p>
		    <input  type="checkbox" checked={complete} onClick={handleToggle}/>
			<button type="button" onClick={handleDelete}>Delete</button>
	    </div>
  );
}

export default ToDo;
