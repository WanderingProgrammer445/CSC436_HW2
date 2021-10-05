import {useState} from 'react';

function AddToDo({username, dispatchToDo}) {

	const [title, setTitle] = useState('')

	const [description, setDescription] = useState('')


	function createToDo(){
		dispatchToDo({type: "CREATE_TODO", title, description})

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
	    <form onSubmit={evt =>{evt.preventDefault();createToDo()}}>
			    
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