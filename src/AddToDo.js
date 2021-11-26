import {useContext, useState, useEffect } from 'react';
import {useResource} from 'react-request-hook'
import { ToDoContext, UserContext } from './Contexts';
import ToDo from './ToDo';

function AddToDo() {

	const [title, setTitle] = useState('')

	const{dispatchToDo, refreshToDo} = useContext(ToDoContext)

	const [description, setDescription] = useState('')

	const {token, username} = useContext(UserContext);

    
	

	//const {dispatchToDo} = useContext(ToDoContext);
	const {createToDo} = useContext(ToDoContext);
	

	


	//useEffect(getToDosWithAuth(token),[toDoCreated])

	function createToDoWrapper(){

		createToDo(title, description, Date.now(), false,"",token)
		refreshToDo(token)

	}



	function updateTitle(evt){
		setTitle(evt.target.value)
	}

	
	function updateDescription(evt){
		setDescription(evt.target.value)
	}


	if(username){
  return (
    <div>
	    <form onSubmit={evt =>{evt.preventDefault();createToDoWrapper()}}>
			    
	       <label htmlFor = "title">Title:  </label><input id="title" type="text" value={title} name="title" onChange={updateTitle}/>
	       <label htmlFor = "description">Description: </label><input id="description" value={description} type="text" name="description" onChange={updateDescription}/>
		   <button name="add" type="submit">Add</button>
		</form>
	</div>
  );
	} else{
		return <div></div>;
	}
}

export default AddToDo;