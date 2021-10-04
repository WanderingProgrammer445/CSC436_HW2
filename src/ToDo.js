

function ToDo({title='', description='', dateCreated=Date.now(), complete=false, listIndex, dateCompleted=Date.now(), dispatchToDo}) {
    const index = listIndex;

	function handleDelete(evt){
        dispatchToDo({type:"DELETE_TODO", index})
	}
	
	function handleToggle(evt){
        dispatchToDo({type: "TOGGLE_TODO", index, complete: evt.target.checked})
	}
    return (
        <div>
	        <h3>{title}</h3>
		    <p>{description}</p>
		    <p>This todo was created on {dateCreated}</p>
		    <p>This todo was completed on {dateCompleted}</p>
		    <input  type="checkbox" onClick={handleToggle}/>
			<button type="button" onClick={handleDelete}>Delete</button>
	    </div>
  );
}

export default ToDo;
