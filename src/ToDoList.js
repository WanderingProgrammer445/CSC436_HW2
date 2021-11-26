import ToDo from './ToDo';
import React, {useContext} from 'react'
import {ToDoContext} from './Contexts'

function ToDoList() {
  const {toDoList} = useContext(ToDoContext)
  console.log("ToDoList: ")
      console.log(toDoList)
  return (
    <div>
      
     {toDoList.map((t,i) =>
	   <ToDo title={t.title} description={t.description} 
     dateCreated={t.dateCreated} complete={t.complete} dateCompleted={t.dateCompleted} listIndex={t.id} key={t.id} canToggleOrDelete={t.canToggleOrDelete} todo_id={i} id={t.id}/>)
     }
     
     </div>
  );
}

export default ToDoList;
