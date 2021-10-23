

function ToDo({title='', description='', dateCreated=Date.now(), complete=false, listIndex, dateCompleted=Date.now(), dispatchToDo, key}) {
    const toDoKey = key;

	function handleDelete(evt){
        dispatchToDo({type:"DELETE_TODO", toDoItemKey: toDoKey})
	}

	function handleToggle(evt){
        dispatchToDo({type: "TOGGLE_TODO", toDoItemKey: toDoKey, completed: evt.target.checked})
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
