import ToDo from './ToDo';
import React, {useContext} from 'react'
import {ToDoContext} from './Contexts'

function ToDoList(/*{toDoList=[{title: 'Do something', description: 'something', dateCreated: Date.now(), complete: false, dateCompleted: ''}],dispatchToDo}*/) {
  const {toDoList} = useContext(ToDoContext)
  return (
    <div>
      
     {toDoList.map((t,i) =>
	   <ToDo title={t.title} description={t.description} dateCreated={t.dateCreated} complete={t.complete} dateCompleted={t.dateCompleted} listIndex={t.id} key={t.id} />)
     }
     </div>
  );
}

export default ToDoList;
