import {useContext} from 'react'
import {ToDoContext} from './Contexts'

function ToDo({title='', description='', dateCreated=Date.now(), complete=false, listIndex, dateCompleted=Date.now(), key}) {
    const toDoKey = listIndex;
	const {dispatchToDo, createToDo, deleteToDo, toggleToDo} = useContext(ToDoContext)
	

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
