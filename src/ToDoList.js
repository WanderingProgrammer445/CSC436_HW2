import ToDo from './ToDo';
import React, {useContext} from 'react'
import {ToDoContext} from './Contexts'

function ToDoList() {
  const {toDoList} = useContext(ToDoContext)
  console.log("ToDoList: ")
      console.log(toDoList)
  return (
    <div>
      
     {toDoList.map((t) =>
	   <ToDo title={t.title} description={t.description} 
     dateCreated={t.dateCreated} complete={t.complete} dateCompleted={t.dateCompleted} listIndex={t._id} key={t._id} canDeleteOrToggle={t.canDeleteOrToggle} />)
     }
     
     </div>
  );
}

export default ToDoList;
