

function ToDo({title='', description='', dateCreated=Date.now(), complete=false, dateCompleted=Date.now()}) {
	
    return (
        <div>
	        <h3>{title}</h3>
		    <p>{description}</p>
		    <p>This todo was created on {dateCreated}</p>
		    <p>This todo was completed on {dateCompleted}</p>
		    <input  type="checkbox"/>
	</div>
  );
}

export default ToDo;
