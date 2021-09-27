
function AddToDo({username}) {
	if(username){
  return (
    <div>
	    <form action="#">
			    
	       <label htmlFor = "title">Title:  </label><input id="title" type="text" name="title"/>
	       <label htmlFor = "description">Description: </label><input id="description" type="text" name="description"/>
		   <button name="add" type="submit">Add</button>
		</form>
	</div>
  );
	} else{
		return <div></div>;
	}
}

export default AddToDo;